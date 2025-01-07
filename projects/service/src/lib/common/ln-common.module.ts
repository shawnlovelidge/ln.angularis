import { NgModule, ModuleWithProviders } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

/**
 * Services
 */
import { LnClipboardService } from './ln-clipboard.service';
import { LnMessageBusService } from './ln-message-bus.service';
import { LnTextFileService } from './ln-text-file.service';
import { LnDateTimeService } from './ln-date-time.service';
import { LnModalService } from './ln-model.service';
import { LnNodeService } from './ln-node.service';

@NgModule({
  imports: [HttpClientModule],
  declarations: [],
  providers: [
    LnClipboardService,
    LnMessageBusService,
    LnTextFileService,
    LnDateTimeService,
    LnModalService,
    LnNodeService,
  ],
})
export class LnCommonServiceModule {
  /**
   * forRoot()
   */
  public static forRoot(): ModuleWithProviders<any> {
    return {
      ngModule: LnCommonServiceModule,
      providers: [
        LnClipboardService,
        LnMessageBusService,
        LnTextFileService,
        LnDateTimeService,
        LnModalService,
        LnNodeService,
      ],
    };
  }
}
