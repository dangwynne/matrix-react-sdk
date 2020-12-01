/*
Copyright 2020 The Matrix.org Foundation C.I.C.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

import React from 'react';
import { _t } from "../../../languageHandler";
import * as sdk from '../../../index';

/*
 * A dialog for confirming closing the Hosting signup setup dialog.
 */
export default class ConfirmCloseHostingSignupDialog extends React.Component {
    public render() {
        const QuestionDialog = sdk.getComponent('views.dialogs.QuestionDialog');
        return (
            <QuestionDialog
                onFinished={this.props.onFinished}
                title={_t("Confirm Abort Of Host Creation")}
                description={_t(
                    "Are you sure you wish to abort creation of the host? The process cannot be continued.",
                )}
                button={_t("Abort")}
            />
        );
    }
}