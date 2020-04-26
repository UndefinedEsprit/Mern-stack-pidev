import PropTypes from "prop-types";
import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import orderBy from "lodash/orderBy";
import { createError } from "../../redux/actions/error";
import {
  getStudies,
  getCountForms,
} from "../../redux/models/study/actions/studies";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useHistory,
} from "react-router-dom";

export class StudiesPage extends Component {
  async componentWillMount() {
    await this.props.actions.getCountForms();
    await this.props.actions.getStudies();
  }
  componentDidCatch(err, info) {
    this.props.actions.createError(err, info);
  }

  render() {
    return (
      <div className="home">
        <div>
          <div>
                               {" "}
            {this.props.studies && (
              <div className="studies">
                                           {" "}
                {this.props.studies.map((study) => (
                  <div>
                    {this.props.countForms.map((element) => {
                      if (element.studyName == study.name)
                        return (
                          <div class="row">
                            <div>
                              <p>{study.name} </p>

                              {element.formsNumber}
                            </div>
                            <div>
                              <Link
                                key={study._id}
                                to={{ pathname: "/formspage/" + study._id }}
                              >
                                {" "}
                                check{" "}
                              </Link>
                            </div>
                            <br></br>
                          </div>
                        );
                    })}
                  </div>
                ))}
              </div>
            )}{" "}
                                          {" "}
          </div>
        </div>
                   {" "}
      </div>
    );
  }
}

StudiesPage.propTypes = {
  studies: PropTypes.arrayOf(PropTypes.object),
  countForms: PropTypes.arrayOf(PropTypes.object),
  actions: PropTypes.shape({
    getStudies: PropTypes.func,
    createError: PropTypes.func,
    getCountForms: PropTypes.func,
    getNextPageOfStudies: PropTypes.func,
  }),
};
export const mapStateToProps = (state) => {
  const studies = orderBy(
    state.studyIds.map((studyId) => state.studies[studyId])
  );
  const countForms = orderBy(
    state.studyIds.map((studyId) => state.countForms[studyId])
  );
  return { studies, countForms };
};

export const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(
      {
        getStudies,
        createError,
        getCountForms,
      },
      dispatch
    ),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(StudiesPage);
