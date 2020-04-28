import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import orderBy from "lodash/orderBy";
import { createError } from "../../redux/actions/error";
import {reset} from "../../redux/actions/reset";
import {
  getFormsForStudy,
  getCountQuestions,
  getFormsStatus,
} from "../../redux/models/form/actions/forms";
import AllFormsQuestionsNumbersStat from "./components/stats/allFormsQuestionsNumbersStat";
import Loading from "./components/loading";
import FormsStatusStat from "./components/stats/formsStatusStat";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";

function FormsPage(props) {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        await props.actions.reset();
        await props.actions.getCountQuestions(id );
        await props.actions.getFormsForStudy(id );
        await props.actions.getFormsStatus(id );
        setIsLoading(false);
      } catch (e) {
        console.log(e);
        throw e; // let caller know the promise was rejected with this reason
      }
    };
    fetchData();
  }, []);
  //console.log(isLoading);
  return (
    <div>
      {isLoading ? (
        <div>
          <Loading />
        </div>
      ) : (
        <div className="">
          <div className="row">
            {props.forms && props.countQuestions && props.formsStatus && (
              <>
                <div className="col-md-4">
                  <nav className="navbar">
                    <ul class="navbar-nav mr-auto">
                      {props.forms.map((form) => (
                        <>
                          {props.countQuestions.map((element) => {
                            if (element.formId == form._id)
                              return (
                                <li class="nav-item">
                                  <Link
                                    class="nav-link "
                                    key={form._id}
                                    to={{
                                      pathname: "/questionspage/" + form._id,
                                    }}
                                  >
                                    {form.title}
                                  </Link>
                                </li>
                              );
                          })}
                        </>
                      ))}
                    </ul>
                  </nav>
                                     
                </div>
                <div className="col-md-8">
                  <div className="row">
                    <div className="col-sm-12">
                      <AllFormsQuestionsNumbersStat
                        forms={props.forms}
                        countQuestions={props.countQuestions}
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-12">
                      <FormsStatusStat formsStatus={props.formsStatus} />
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
FormsPage.propTypes = {
  actions: PropTypes.shape({
    getCountQuestions: PropTypes.func,
    getFormsForStudy: PropTypes.func,
    getFormsStatus: PropTypes.func,
    reset: PropTypes.func,
  }),
};
export const mapStateToProps = (state) => {
  const forms = orderBy(state.formIds.map((formId) => state.forms[formId]));
  const countQuestions = orderBy(
    state.formIds.map((formId) => state.countQuestions[formId])
  );
  const formsStatus = orderBy(
    state.formIds.map((formId) => state.formsStatus[formId])
  );
  return { forms, countQuestions, formsStatus };
};

export const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(
      {
        createError,
        getCountQuestions,
        getFormsForStudy,
        getFormsStatus,
        reset
      },
      dispatch
    ),
  };
};



export default connect(mapStateToProps, mapDispatchToProps)(FormsPage);
