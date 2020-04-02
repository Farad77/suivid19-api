import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { Connection } from 'typeorm';
import { TestsModule } from './tests/tests.module';
import { PatientsModule } from './patients/patients.module';
import { RelativesModule } from './relatives/relatives.module';
import { DoctorsModule } from './doctors/doctors.module';
import { AdminsModule } from './admins/admins.module';
import { MonitorsModule } from './monitors/monitors.module';
import { TrackingModule } from './tracking/tracking.module';
import { SymptomsModule } from './symptoms/symptoms.module';
import { SurveyanswerModule } from './surveyanswer/surveyanswer.module';
import { NotificationsModule } from './notifications/notifications.module';
import { LabosModule } from './labos/labos.module';
import { IdesModule } from './ides/ides.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    UsersModule,
    TestsModule,
    PatientsModule,
    RelativesModule,
    DoctorsModule,
    AdminsModule,
    TrackingModule,
    SymptomsModule,
    SurveyanswerModule,
    MonitorsModule,
    TrackingModule,
    NotificationsModule,
    LabosModule,
    IdesModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private connection: Connection) { }
}
