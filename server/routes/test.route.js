import express from 'express';
import testCtrl from '../controllers/test.controller';

const router = express.Router(); // eslint-disable-line new-cap

router.route('/test')
    .get(testCtrl.information);


export default router;