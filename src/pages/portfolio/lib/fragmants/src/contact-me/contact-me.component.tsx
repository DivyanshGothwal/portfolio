import { Button, CircularProgress, Snackbar, TextField, Typography } from '@material-ui/core';
import { Alert } from '@mui/material';
import { CustomGrid, HeaderComponent } from '@portfolio/component';
import React, { PureComponent } from 'react';
// eslint-disable-next-line import/no-cycle
import { ContactMeComponentState } from './contact-me.container';

interface ContactMeComponentProps extends ContactMeComponentState{
  onSendEmail: () => void;
  onChange: (name: string, value: string) => void;
  onCloseSnackbar: () => void;
}

export class ContactMeComponent extends PureComponent<ContactMeComponentProps> {
  render() {
    const {
      onSendEmail, onChange, name, email, message,
      subject, errors, sentStatus, hideSnackbar, onCloseSnackbar,
    } = this.props;
    return (
      <CustomGrid container>
        <CustomGrid
          container
          className="component__container mx-auto justify-content-center mb-5"
        >
          <CustomGrid
            item
            xs={12}
          >
            <HeaderComponent
              text="Contact Me"
              progressBar={{
                value: 50,
              }}
              classes={{
                root: 'pt-6 mt-6',
              }}
            />
          </CustomGrid>

        </CustomGrid>
        <CustomGrid container>
          <CustomGrid
            item
            xs={12}
            sm={12}
            md={6}
          >
            <CustomGrid className="mb-5">
              <Typography variant="h5">
                Get In Touch
              </Typography>
            </CustomGrid>
            <CustomGrid>
              <TextField
                label="Enter Your Name"
                variant="outlined"
                margin="dense"
                className="mb-3"
                FormHelperTextProps={{
                  error: !!errors?.name,
                }}
                {... !!errors?.name && {
                  helperText: 'Name must be at least 5 characters long',
                }}
                value={name}
                onChange={({ target: { value } }) => onChange('name', value)}
                fullWidth
                required
              />
            </CustomGrid>
            <CustomGrid>
              <TextField
                label="Enter Your Email"
                variant="outlined"
                margin="dense"
                className="mb-3"
                FormHelperTextProps={{
                  error: !!errors?.email,
                }}
                {... !!errors?.email && {
                  helperText: 'Enter correct email id',
                }}
                value={email}
                onChange={({ target: { value } }) => onChange('email', value)}
                fullWidth
                required
              />
            </CustomGrid>
            <CustomGrid>
              <TextField
                label="Enter Your Subject"
                variant="outlined"
                margin="dense"
                className="mb-3"
                FormHelperTextProps={{
                  error: !!errors?.subject,
                }}
                {... !!errors?.subject && {
                  helperText: 'Subject must be at least 5 characters long',
                }}
                value={subject}
                onChange={({ target: { value } }) => onChange('subject', value)}
                fullWidth
                required
              />
            </CustomGrid>
            <CustomGrid>
              <TextField
                label="Enter Your Message"
                variant="outlined"
                minRows="6"
                maxRows="20"
                margin="dense"
                className="mb-3"
                value={message}
                FormHelperTextProps={{
                  error: !!errors?.message,
                }}
                {... !!errors?.message && {
                  helperText: 'Message must be at least 5 characters long',
                }}
                onChange={({ target: { value } }) => onChange('message', value)}
                fullWidth
                multiline
                required
              />
            </CustomGrid>
            <CustomGrid>
              <Button
                color="primary"
                variant="outlined"
                onClick={onSendEmail}
              >
                {sentStatus === 'loading' && <CircularProgress size="1.5rem" className="mr-2" />}
                Send Email
              </Button>
              {sentStatus === 'success'
              && (
                <Snackbar
                  open={!hideSnackbar}
                  autoHideDuration={6000}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                  }}
                  onClose={onCloseSnackbar}
                >
                  <Alert severity={sentStatus as any}>
                    You message has been sent, you will be contacted shortly!!!
                  </Alert>
                </Snackbar>
              )}
              {sentStatus === 'error'
              && (
                <Snackbar
                  open={!hideSnackbar}
                  autoHideDuration={6000}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                  }}
                  onClose={onCloseSnackbar}
                >
                  <Alert severity={sentStatus as any}>
                    Failed to send email please check contact form details
                  </Alert>
                </Snackbar>
              )}
            </CustomGrid>
          </CustomGrid>
          <CustomGrid
            item
            xs={12}
            sm={12}
            md={6}
          >
            cards
          </CustomGrid>
        </CustomGrid>
      </CustomGrid>
    );
  }
}

