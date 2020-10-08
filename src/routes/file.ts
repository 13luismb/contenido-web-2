import { Router } from 'express';
import multer = require('multer');
import { diskStorage, photoFilter } from '@utils/multer';

const router = Router();

const uploadFile = (req, res, next) => {
  switch (req.params.type) {
    case 'avatar':
      multer({
        storage: diskStorage('avatar'),
        fileFilter: photoFilter,
      }).single('file')(req, res, next);
      break;
  }
};

router.post('/:type', uploadFile, async (req: any, res) => {
  const archivo = req.file;
  res.status(200).json({
    status: 200,
    message: `Archivo de tipo ${req.params.type} subido`,
    archivo,
  });
});

export default router;
