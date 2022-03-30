import { forwardRef } from 'react';
import MaskedInput from 'react-text-mask';

const MaskedInputWithRef = forwardRef(
  (topLevelProps: any, ref: React.Ref<HTMLInputElement>) => {
    return (
      <MaskedInput
        render={(textMaskRef, props) => (
          <input
            {...props}
            ref={(node) => {
              if (node) {
                textMaskRef(node);
                if (ref) {
                  (ref as React.MutableRefObject<HTMLInputElement>).current =
                    node;
                }
              }
            }}
          />
        )}
        {...topLevelProps}
      />
    );
  }
);

export default MaskedInputWithRef;
