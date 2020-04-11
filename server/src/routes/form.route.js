const express = require('express');
const FormService = require('../services/form.service');

const multer  = require('multer')

const storage = multer.diskStorage({
    destination : function(req,file,cb){
        cb(null, '../uploads/');
    },
    filename : function (req,file,cb){
        cb(null,file.originalname);
    }
})

const upload = multer({ storage : storage })

const router = express.Router();
const service = new FormService();

router.post('/',service.add);
router.get('/',service.getAll);

router.get('/:id',service.getById);
router.delete('/',service.delete);


router.put('/',async (req,res)=>{
    let form =req.body;
    service.update(form)
    .then(result=> res.send(result))
    .catch(err=>res.send(err));
});

router.get('/getbystudy/:id', (req,res)=>{
    let studyId = req.params.id;
    console.log(studyId);
    service.getByStudy(studyId)
    .then(result=>res.send(result))
    .catch(err=>{
        console.log(err);
        res.status('500').send();
    })
});

router.post('/publish',async(req,res)=>{
     service.publish(req.body)
     .then(result => res.send(result))
     .catch(err=> {
        console.log(err);
        res.status('500').send();
     });
});


router.post('/upload',upload.array('file'), (req,res,next)=>{
    res.status(200).json({message: 'images successfully saved'});
});

module.exports = router;