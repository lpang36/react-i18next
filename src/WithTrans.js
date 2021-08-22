import React from 'react';
import { Trans } from './Trans';

export const WithTrans = (Component) => {
    if (Component.prototype?.isReactComponent) {
        return class extends Component {
            render() {
                return <Trans>
                    { Component.prototype.render.call(this) }
                </Trans>
            }
        }
    } else {
        return (props) => {
            return <Trans>
                { Component(props) }
            </Trans>
        }
    }
}
