import { Injectable } from '@angular/core';
import { Token } from '@feature/tokens/model/token.model';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { TokenStoreActions } from './token-store.actions';
import { TokenStoreSelectors } from './token-store.selectors';
import { TokenStoreState } from './token-store.state';

@Injectable()
export class TokenStoreFacade {
  public tokens$: Observable<Token[]> = this.store.select(TokenStoreSelectors.getTokens);

  constructor(private store: Store<TokenStoreState>) {}

  public setTokens(tokens: Token[]): void {
    this.store.dispatch(TokenStoreActions.setTokens({ payload: tokens }));
  }
}