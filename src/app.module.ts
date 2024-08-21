import { Module } from '@nestjs/common';
import { DatabaseModule } from './modules/database/database.module';
import { ConfigModule } from '@nestjs/config';
import { StaffModule } from './modules/staff/staff.module';
import { ProtocolsModule } from './modules/protocols/protocols.module';
import { CustomersModule } from './modules/customers/customers.module';
import { JournalModule } from './modules/journal/journal.module';

@Module({
  imports: [
    ConfigModule.forRoot(
      {
        isGlobal: true
      }
    ),
    DatabaseModule,
    StaffModule,
    ProtocolsModule,
    CustomersModule,
    JournalModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
