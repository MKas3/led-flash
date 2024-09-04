import * as React from 'react';

type CommentsAddEmailTemplateProps = {
  firstName: string;
};

export const CommentsAddEmailTemplate = ({
  firstName
}: CommentsAddEmailTemplateProps) => (
  <div>
    <h1>
      Welcome,
      {firstName}
      !
    </h1>
  </div>
);
