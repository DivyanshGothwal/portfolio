/* eslint-disable no-unused-vars */
import React, { PureComponent } from 'react';
import { HomeComponent } from './home.component';

class Container extends PureComponent {
  static onClickFacebook = () => {
    window.open('https://www.facebook.com/dgcod/', '_blank')?.focus();
  };

  static onClickTwitter = () => {
    window.open('https://twitter.com/DivyanshGothwal', '_blank')?.focus();
  };

  static onClickGithub = () => {
    window.open('https://github.com/DivyanshGothwal', '_blank')?.focus();
  };

  static onClickLinkedIn = () => {
    window.open('https://www.linkedin.com/in/divyansh-gothwal-78822a115/', '_blank')?.focus();
  };

  render() {
    return (
      <HomeComponent
        onClickFacebook={Container.onClickFacebook}
        onClickTwitter={Container.onClickTwitter}
        onClickGithub={Container.onClickGithub}
        onClickLinkedIn={Container.onClickLinkedIn}
      />
    );
  }
}

export const HomeContainer = Container;
