import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { getStorage } from 'firebase-admin/storage';
import { FileInterceptor } from 'src/config/file-interceptor';
import { v4 as uuid } from 'uuid';

@Controller('upload')
export class UploadController {
  @Post()
  @UseInterceptors(
    new FileInterceptor('file', 1, {
      limits: {
        fileSize: 1024 * 1024 * 100,
      },
    }),
  )
  async uploadFile(@UploadedFile() file: Express.Multer.File) {
    if (!file) {
      throw new Error('File is required');
    }

    const bucket = getStorage().bucket();
    const fileName = `uploads/${uuid()}/${file.originalname}`;
    const fileUpload = bucket.file(fileName);
    const [exist] = await fileUpload.exists();
    if (exist) {
      throw new Error('File already exists');
    }

    await fileUpload.save(file.buffer, {
      metadata: {
        contentType: file.mimetype,
      },
      public: true,
    });

    return {
      success: true,
      fileName,
    };
  }
}
