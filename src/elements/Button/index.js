import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function Button({
  className: classNameProps,
  onClick: onClickProps,
  type: typeProps,
  href: hrefProps,
  style: styleProps,
  target: targetProps,
  isDisabled,
  isLoading,
  children,
  isExternal,
  isPrimary,
  isLarge,
  isSmall,
  isBlock,
  hasShadow,
}) {
  const className = [classNameProps];
  if (isPrimary) className.push('btn-primary');
  if (isLarge) className.push('btn-lg');
  if (isSmall) className.push('btn-sm');
  if (isBlock) className.push('btn-block');
  if (hasShadow) className.push('btn-block');

  const onClick = () => {
    if (onClickProps) onClickProps();
  };

  if (isDisabled || isLoading) {
    if (isDisabled) className.push('disabled');
    return (
      <span className={className.join(' ')} style={styleProps}>
        {isLoading ? (
          <>
            <span className="spinner-border spinner-border-sm mx-5"></span>
            <span className="sr-only">Loading...</span>
          </>
        ) : (
          children
        )}
      </span>
    );
  }

  if (typeProps === 'link') {
    if (isExternal) {
      return (
        // eslint-disable-next-line react/jsx-no-target-blank
        <a
          className={className.join(' ')}
          style={styleProps}
          target={targetProps === '_blank' ? '_blank' : undefined}
          rel={targetProps === '_blank' ? 'noopener noreferrer' : undefined}
          href={hrefProps}
        >
          {children}
        </a>
      );
    } else {
      return (
        <Link to={hrefProps} className={className.join(' ')} style={styleProps}>
          {children}
        </Link>
      );
    }
  }

  return (
    <button
      className={className.join(' ')}
      style={styleProps}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  type: PropTypes.oneOf(['button', 'link']),
  onClick: PropTypes.func,
  target: PropTypes.string,
  className: PropTypes.string,
  isDisabled: PropTypes.bool,
  isLoading: PropTypes.bool,
  isSmall: PropTypes.bool,
  isLarge: PropTypes.bool,
  isBlock: PropTypes.bool,
  isExternal: PropTypes.bool,
  hasShadow: PropTypes.bool,
};
