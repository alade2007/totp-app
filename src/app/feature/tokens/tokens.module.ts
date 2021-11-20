import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TokensComponent } from './page/tokens/tokens.component';
import { TokenListComponent } from './component/token-list/token-list.component';
import { TokensRoutingModule } from './tokens-routing.module';
import { TokenComponent } from './component/token/token.component';

@NgModule({
  declarations: [TokensComponent, TokenListComponent, TokenComponent],
  imports: [CommonModule, TokensRoutingModule],
})
export class TokensModule {}
