import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  const options = new DocumentBuilder()
    .setTitle('Suivid19 API')
    .setDescription('Description de l\'API')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('', app, document, {
    //customfavIcon: '',
    customSiteTitle: 'Suivid19 API'
  });

  app.enableCors();
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
