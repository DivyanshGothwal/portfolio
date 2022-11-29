/* eslint-disable no-useless-escape */
import { cloneDeep } from 'lodash';
import React, { PureComponent } from 'react';
import { token } from './constants/contact-me.constants';
// eslint-disable-next-line import/no-cycle
import { ContactMeComponent } from './contact-me.component';

export interface ContactMeComponentState {
    name: string;
    email: string;
    subject:string;
    message: string;
    errors?: ContactMeComponentState,
    sentStatus?: 'loading' | 'success' | 'error' | 'none';
    hideSnackbar?: boolean;
}

export class ContactMeContainer extends PureComponent<{}, ContactMeComponentState> {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      subject: '',
      message: '',
      errors: {
        name: '',
        email: '',
        subject: '',
        message: '',
      },
      sentStatus: 'none',
      hideSnackbar: true,
    };
  }

  onSendEmail = () => {
    this.validateForm()
      .then(() => {
        const {
          errors: {
            name: errorName, email: errorEmail,
            subject: errorSubject, message: errorMessage,
          } = {
          }, name, email, subject, message,
        } = this.state;
        if (!errorName && !errorEmail && !errorSubject && !errorMessage) {
          this.setState({
            sentStatus: 'loading',
          });
          (window as any).Email.send({
            SecureToken: token,
            To: 'divyansh.gothwal.iitr@gmail.com',
            From: 'divyansh.gothwal.iitr@gmail.com',
            Subject: `${name}-${email}-${subject}`,
            Body: message,
          }).then((res) => {
            if (res === 'OK') {
              this.setState({
                sentStatus: 'success',
                hideSnackbar: false,
              });
            } else {
              this.setState({
                sentStatus: 'error',
                hideSnackbar: false,
              });
            }
          }).catch(() => {
            this.setState({
              sentStatus: 'error',
              hideSnackbar: false,
            });
          });
        }
      });
  };

  validateForm = () => {
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let state = cloneDeep(this.state);
    Object.keys(this.state).forEach((name) => {
      const value = state[name];
      if (!value || value.length < 5 || (name === 'email' && !value.match(emailRegex))) {
        state = {
          ...state,
          [name]: value,
          errors: {
            ...state.errors,
            [name]: 'error',
          },
        } as any;
      } else {
        state = {
          ...state,
          [name]: value,
          errors: {
            ...state.errors,
            [name]: '',
          },
        } as any;
      }
    });
    return new Promise((resolve) => {
      this.setState(state, () => {
        resolve('success');
      });
    });
  };

  onCloseSnackbar = () => {
    const { hideSnackbar } = this.state;
    this.setState({
      hideSnackbar: !hideSnackbar,
    });
  };

  onChange = (name: string, value: string) => {
    const newState = this.state;
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!value || value.length < 5 || (name === 'email' && !value.match(emailRegex))) {
      this.setState(({
        ...newState,
        [name]: value,
        errors: {
          ...newState.errors,
          [name]: 'error',
        },
      } as any));
    } else {
      this.setState(({
        ...newState,
        [name]: value,
        errors: {
          ...newState.errors,
          [name]: '',
        },
      } as any));
    }
  };

  render() {
    return (
      <ContactMeComponent
        {...this.state}
        onSendEmail={this.onSendEmail}
        onChange={this.onChange}
        onCloseSnackbar={this.onCloseSnackbar}
      />
    );
  }
}

