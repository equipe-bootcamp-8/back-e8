import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getAppStatus(): string {
    return 'Server is running! 🚀\n Please check https://cloudwalk-backend.onrender.com/docs for Swagger docs...';
  }
}
