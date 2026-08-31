/* @ds-bundle: {"format":4,"namespace":"KHOVGroupDesignSystem_5d414f","components":[{"name":"Button","sourcePath":"components/actions/Button.jsx"},{"name":"TextLink","sourcePath":"components/actions/TextLink.jsx"},{"name":"ArcMotif","sourcePath":"components/brand/ArcMotif.jsx"},{"name":"Wordmark","sourcePath":"components/brand/Wordmark.jsx"},{"name":"ContentCard","sourcePath":"components/cards/ContentCard.jsx"},{"name":"FeatureCard","sourcePath":"components/cards/FeatureCard.jsx"},{"name":"QuoteCard","sourcePath":"components/cards/QuoteCard.jsx"},{"name":"TierCard","sourcePath":"components/cards/TierCard.jsx"},{"name":"Badge","sourcePath":"components/display/Badge.jsx"},{"name":"Icon","sourcePath":"components/display/Icon.jsx"},{"name":"SectionHeading","sourcePath":"components/display/SectionHeading.jsx"},{"name":"StatBlock","sourcePath":"components/display/StatBlock.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Field","sourcePath":"components/forms/Field.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"},{"name":"Band","sourcePath":"components/layout/Band.jsx"},{"name":"CtaBand","sourcePath":"components/layout/CtaBand.jsx"},{"name":"HeroBand","sourcePath":"components/layout/HeroBand.jsx"},{"name":"Footer","sourcePath":"components/navigation/Footer.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"},{"name":"TopNav","sourcePath":"components/navigation/TopNav.jsx"}],"sourceHashes":{"components/actions/Button.jsx":"8654fd639e74","components/actions/TextLink.jsx":"5ed8cd1b7d87","components/brand/ArcMotif.jsx":"c49b3bd8f444","components/brand/Wordmark.jsx":"ca352a7524af","components/cards/ContentCard.jsx":"c45e2ea67db4","components/cards/FeatureCard.jsx":"fb57d53759f6","components/cards/QuoteCard.jsx":"360dc2e877fd","components/cards/TierCard.jsx":"dee2578ba66f","components/display/Badge.jsx":"489ae43d1191","components/display/Icon.jsx":"35a1fc29b577","components/display/SectionHeading.jsx":"85f866a68af4","components/display/StatBlock.jsx":"d78bf6a041ab","components/forms/Checkbox.jsx":"286519f69a7e","components/forms/Field.jsx":"263bb1fa4644","components/forms/Input.jsx":"e1a95800d186","components/forms/Radio.jsx":"9f3d4fbb5c3d","components/forms/Select.jsx":"e10ad53cf533","components/forms/Textarea.jsx":"837ba32a9b35","components/layout/Band.jsx":"3ebe6d9b7dd6","components/layout/CtaBand.jsx":"82a762bf7abf","components/layout/HeroBand.jsx":"b60bab883620","components/navigation/Footer.jsx":"f34f8dceeb49","components/navigation/Tabs.jsx":"c3a42ececb65","components/navigation/TopNav.jsx":"d81a5923565c","ui_kits/website/App.jsx":"3b216e10e37a","ui_kits/website/CaseStudy.jsx":"6cb6f1118779","ui_kits/website/Contact.jsx":"fa85c264c468","ui_kits/website/Home.jsx":"04d56a60e563","ui_kits/website/Services.jsx":"28ae46a3029f","ui_kits/website/Site.jsx":"10d9a4759be3"},"inlinedExternals":[],"unexposedExports":[{"name":"featureCycle","sourcePath":"components/cards/FeatureCard.jsx"},{"name":"inputBase","sourcePath":"components/forms/Input.jsx"}]} */

(() => {

const __ds_ns = (window.KHOVGroupDesignSystem_5d414f = window.KHOVGroupDesignSystem_5d414f || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/actions/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const base = {
  font: 'var(--text-button)',
  height: 'var(--control-height)',
  padding: '12px 20px',
  borderRadius: 'var(--radius-md)',
  border: '1px solid transparent',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 'var(--space-xs)',
  cursor: 'pointer',
  textDecoration: 'none',
  boxShadow: 'none',
  transition: 'background-color 140ms ease, color 140ms ease'
};
const variants = {
  primary: {
    background: 'var(--primary)',
    color: 'var(--on-primary)'
  },
  accent: {
    background: 'var(--accent)',
    color: 'var(--on-accent)'
  },
  secondary: {
    background: 'var(--canvas)',
    color: 'var(--ink)',
    borderColor: 'var(--hairline)'
  },
  onColor: {
    background: 'var(--canvas)',
    color: 'var(--ink)'
  },
  quiet: {
    background: 'transparent',
    color: 'var(--primary)'
  }
};
const actives = {
  primary: 'var(--primary-active)',
  accent: 'var(--accent-active)',
  secondary: 'var(--surface-card)',
  onColor: 'var(--surface-card)',
  quiet: 'var(--surface-card)'
};
const sizes = {
  sm: {
    height: '36px',
    padding: '8px 14px'
  },
  md: {},
  lg: {
    height: '52px',
    padding: '16px 28px',
    fontSize: '15px'
  }
};
function Button({
  variant = 'primary',
  size = 'md',
  disabled = false,
  fullWidth = false,
  href,
  iconLeft,
  iconRight,
  style,
  children,
  ...rest
}) {
  const [hot, setHot] = React.useState(false);
  const v = variants[variant] || variants.primary;
  const s = {
    ...base,
    ...v,
    ...sizes[size],
    width: fullWidth ? '100%' : undefined,
    ...(hot && !disabled ? {
      background: actives[variant]
    } : null),
    ...(disabled ? {
      background: 'var(--primary-disabled)',
      color: 'var(--muted)',
      borderColor: 'transparent',
      cursor: 'not-allowed'
    } : null),
    ...style
  };
  const Tag = href && !disabled ? 'a' : 'button';
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: href,
    disabled: Tag === 'button' ? disabled : undefined,
    style: s,
    onMouseEnter: () => setHot(true),
    onMouseLeave: () => setHot(false)
  }, rest), iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/Button.jsx", error: String((e && e.message) || e) }); }

// components/actions/TextLink.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function TextLink({
  href = '#',
  size = 'md',
  withArrow = false,
  style,
  children,
  ...rest
}) {
  const [hot, setHot] = React.useState(false);
  return /*#__PURE__*/React.createElement("a", _extends({
    href: href,
    onMouseEnter: () => setHot(true),
    onMouseLeave: () => setHot(false),
    style: {
      font: size === 'sm' ? 'var(--text-body-sm)' : 'var(--text-body-md)',
      fontWeight: 500,
      color: hot ? 'var(--primary-active)' : 'var(--primary)',
      textDecoration: 'none',
      borderBottom: '1px solid ' + (hot ? 'var(--primary-active)' : 'var(--hairline)'),
      display: 'inline-flex',
      alignItems: 'center',
      gap: '6px',
      paddingBottom: '1px',
      ...style
    }
  }, rest), children, withArrow ? /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true"
  }, "\u2192") : null);
}
Object.assign(__ds_scope, { TextLink });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/TextLink.jsx", error: String((e && e.message) || e) }); }

// components/brand/ArcMotif.jsx
try { (() => {
/**
 * The one decorative element in the system: a large flat arc.
 * Max two per page. No stroke, no gradient, no shadow.
 */
function ArcMotif({
  fill = 'mist',
  variant = 'quarter',
  width = '100%',
  height = 320,
  flip = false,
  style
}) {
  const color = fill === 'stone' ? 'var(--accent-stone)' : fill === 'seaglass' ? 'var(--card-seaglass)' : 'var(--accent-mist)';
  const paths = {
    /** Solid quarter-round, for the hero's right column. */
    quarter: 'M0 400 A400 400 0 0 1 400 0 L400 400 Z',
    /** Half-round cap, for section separators. */
    half: 'M0 400 A200 200 0 0 1 400 400 Z',
    /** Thick curved rule, acceptable as the second use (above the footer). */
    rule: 'M0 400 C120 240 280 240 400 400 L400 340 C280 180 120 180 0 340 Z'
  };
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 400 400",
    width: width,
    height: height,
    preserveAspectRatio: "none",
    "aria-hidden": "true",
    style: {
      display: 'block',
      transform: flip ? 'scaleX(-1)' : undefined,
      ...style
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: paths[variant] || paths.quarter,
    fill: color
  }));
}
Object.assign(__ds_scope, { ArcMotif });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/ArcMotif.jsx", error: String((e && e.message) || e) }); }

// components/brand/Wordmark.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** No logo file was supplied. The wordmark is set in the display face until one exists. */
function Wordmark({
  size = 20,
  tone = 'primary',
  style,
  ...rest
}) {
  const color = tone === 'onDark' ? 'var(--on-dark)' : tone === 'ink' ? 'var(--ink)' : 'var(--primary)';
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      font: '500 ' + size + 'px/1 var(--font-display)',
      fontVariationSettings: 'var(--font-display-variation)',
      letterSpacing: '-0.5px',
      color,
      whiteSpace: 'nowrap',
      ...style
    }
  }, rest), "KHOV", /*#__PURE__*/React.createElement("span", {
    style: {
      color: tone === 'onDark' ? 'var(--on-dark-soft)' : 'var(--muted-soft)'
    }
  }, "\xA0Group"));
}
Object.assign(__ds_scope, { Wordmark });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Wordmark.jsx", error: String((e && e.message) || e) }); }

// components/cards/ContentCard.jsx
try { (() => {
function ContentCard({
  eyebrow,
  title,
  body,
  footer,
  style,
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--canvas)',
      border: '1px solid var(--hairline)',
      borderRadius: 'var(--radius-lg)',
      padding: 'var(--pad-card-content)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-xs)',
      boxShadow: 'none',
      ...style
    }
  }, eyebrow ? /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 12px/1.4 var(--font-body)',
      letterSpacing: 'var(--tracking-caps)',
      textTransform: 'uppercase',
      color: 'var(--muted)'
    }
  }, eyebrow) : null, title ? /*#__PURE__*/React.createElement("h3", {
    style: {
      font: 'var(--text-title-md)',
      color: 'var(--ink)',
      margin: 0
    }
  }, title) : null, body ? /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--text-body-md)',
      color: 'var(--body)',
      margin: 0
    }
  }, body) : null, children, footer ? /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      paddingTop: 'var(--space-md)'
    }
  }, footer) : null);
}
Object.assign(__ds_scope, { ContentCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/ContentCard.jsx", error: String((e && e.message) || e) }); }

// components/cards/FeatureCard.jsx
try { (() => {
const FILLS = {
  deep: {
    background: 'var(--card-deep)',
    color: 'var(--on-dark)',
    soft: 'var(--on-dark-soft)'
  },
  aqua: {
    background: 'var(--card-aqua)',
    color: 'var(--ink)',
    soft: 'var(--body-strong)'
  },
  coral: {
    background: 'var(--card-coral)',
    color: 'var(--ink)',
    soft: 'var(--body-strong)'
  },
  dune: {
    background: 'var(--card-dune)',
    color: 'var(--ink)',
    soft: 'var(--body-strong)'
  },
  seaglass: {
    background: 'var(--card-seaglass)',
    color: 'var(--ink)',
    soft: 'var(--body-strong)'
  },
  cream: {
    background: 'var(--surface-card)',
    color: 'var(--ink)',
    soft: 'var(--muted)'
  }
};

/** Cycle order for grids — never repeat a fill twice in a row. */
const featureCycle = ['deep', 'aqua', 'dune', 'coral', 'seaglass', 'cream'];
function FeatureCard({
  color = 'deep',
  eyebrow,
  title,
  body,
  footer,
  icon,
  style,
  children
}) {
  const fill = FILLS[color] || FILLS.deep;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: fill.background,
      color: fill.color,
      borderRadius: 'var(--radius-xl)',
      padding: 'var(--pad-card-feature)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-sm)',
      boxShadow: 'none',
      border: 'none',
      ...style
    }
  }, icon ? /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 'var(--space-xs)',
      color: fill.color
    }
  }, icon) : null, eyebrow ? /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 12px/1.4 var(--font-body)',
      letterSpacing: 'var(--tracking-caps)',
      textTransform: 'uppercase',
      color: fill.soft
    }
  }, eyebrow) : null, title ? /*#__PURE__*/React.createElement("h3", {
    style: {
      font: 'var(--text-title-lg)',
      letterSpacing: 'var(--tracking-title-lg)',
      color: fill.color,
      margin: 0
    }
  }, title) : null, body ? /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--text-body-md)',
      color: fill.color,
      opacity: color === 'deep' ? 0.85 : 0.8,
      margin: 0
    }
  }, body) : null, children, footer ? /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      paddingTop: 'var(--space-md)'
    }
  }, footer) : null);
}
Object.assign(__ds_scope, { featureCycle, FeatureCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/FeatureCard.jsx", error: String((e && e.message) || e) }); }

// components/cards/QuoteCard.jsx
try { (() => {
function QuoteCard({
  quote,
  name,
  role,
  style
}) {
  return /*#__PURE__*/React.createElement("figure", {
    style: {
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-lg)',
      padding: 'var(--pad-card-content)',
      margin: 0,
      display: 'grid',
      gap: 'var(--space-md)',
      boxShadow: 'none',
      ...style
    }
  }, /*#__PURE__*/React.createElement("blockquote", {
    style: {
      font: 'var(--text-body-md)',
      fontSize: '17px',
      color: 'var(--body-strong)',
      margin: 0
    }
  }, quote), /*#__PURE__*/React.createElement("figcaption", {
    style: {
      display: 'grid',
      gap: '2px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-title-sm)',
      color: 'var(--ink)'
    }
  }, name), /*#__PURE__*/React.createElement("span", {
    style: {
      font: '500 13px/1.4 var(--font-body)',
      color: 'var(--muted-soft)'
    }
  }, role)));
}
Object.assign(__ds_scope, { QuoteCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/QuoteCard.jsx", error: String((e && e.message) || e) }); }

// components/cards/TierCard.jsx
try { (() => {
function TierCard({
  name,
  price,
  cadence,
  description,
  features = [],
  action,
  featured = false,
  style
}) {
  const dark = featured;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: dark ? 'var(--card-deep)' : 'var(--canvas)',
      color: dark ? 'var(--on-dark)' : 'var(--ink)',
      border: dark ? 'none' : '1px solid var(--hairline)',
      borderRadius: 'var(--radius-lg)',
      padding: 'var(--pad-card-feature)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-md)',
      boxShadow: 'none',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-xxs)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '600 12px/1.4 var(--font-body)',
      letterSpacing: 'var(--tracking-caps)',
      textTransform: 'uppercase',
      color: dark ? 'var(--on-dark-soft)' : 'var(--muted)'
    }
  }, name), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-display-sm)',
      letterSpacing: 'var(--tracking-display-sm)',
      fontVariationSettings: 'var(--font-display-variation)',
      color: dark ? 'var(--on-dark)' : 'var(--ink)'
    }
  }, price), cadence ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-body-sm)',
      color: dark ? 'var(--on-dark-soft)' : 'var(--muted)'
    }
  }, cadence) : null), description ? /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--text-body-md)',
      color: dark ? 'var(--on-dark)' : 'var(--body)',
      opacity: dark ? 0.85 : 1,
      margin: 0
    }
  }, description) : null, /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      display: 'grid',
      gap: 'var(--space-xs)'
    }
  }, features.map(t => /*#__PURE__*/React.createElement("li", {
    key: t,
    style: {
      display: 'flex',
      gap: 'var(--space-xs)',
      font: 'var(--text-body-sm)',
      color: dark ? 'var(--on-dark)' : 'var(--body)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      color: dark ? 'var(--card-seaglass)' : 'var(--card-aqua)'
    }
  }, "\u2014"), t))), action ? /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      paddingTop: 'var(--space-xs)'
    }
  }, action) : null);
}
Object.assign(__ds_scope, { TierCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/TierCard.jsx", error: String((e && e.message) || e) }); }

// components/display/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONES = {
  neutral: {
    background: 'var(--surface-card)',
    color: 'var(--ink)'
  },
  mist: {
    background: 'var(--accent-mist)',
    color: 'var(--ink)'
  },
  onDark: {
    background: 'var(--surface-dark-elevated)',
    color: 'var(--on-dark)'
  },
  success: {
    background: 'var(--success)',
    color: 'var(--canvas)'
  },
  warning: {
    background: 'var(--warning)',
    color: 'var(--canvas)'
  },
  error: {
    background: 'var(--error)',
    color: 'var(--canvas)'
  }
};
function Badge({
  tone = 'neutral',
  style,
  children,
  ...rest
}) {
  const t = TONES[tone] || TONES.neutral;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      ...t,
      font: '500 13px/1.4 var(--font-body)',
      borderRadius: 'var(--radius-pill)',
      padding: '4px 12px',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '6px',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Badge.jsx", error: String((e && e.message) || e) }); }

// components/display/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Intentional addition: thin wrapper over Lucide (CDN, lucide-static) so icons
 * inherit currentColor via a CSS mask. No icon set was supplied with the brand;
 * Lucide's 1.5–2px stroke matches the system's hairline weight.
 */
const CDN = 'https://unpkg.com/lucide-static@0.469.0/icons/';
function Icon({
  name = 'circle',
  size = 20,
  strokeColor,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    "aria-hidden": "true",
    style: {
      display: 'inline-block',
      width: size + 'px',
      height: size + 'px',
      flex: '0 0 auto',
      background: strokeColor || 'currentColor',
      WebkitMaskImage: 'url(' + CDN + name + '.svg)',
      maskImage: 'url(' + CDN + name + '.svg)',
      WebkitMaskRepeat: 'no-repeat',
      maskRepeat: 'no-repeat',
      WebkitMaskSize: 'contain',
      maskSize: 'contain',
      WebkitMaskPosition: 'center',
      maskPosition: 'center',
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Icon.jsx", error: String((e && e.message) || e) }); }

// components/display/SectionHeading.jsx
try { (() => {
function SectionHeading({
  eyebrow,
  title,
  body,
  action,
  align = 'left',
  size = 'md',
  style
}) {
  const font = size === 'lg' ? 'var(--text-display-lg)' : size === 'sm' ? 'var(--text-display-sm)' : 'var(--text-display-md)';
  const track = size === 'lg' ? 'var(--tracking-display-lg)' : size === 'sm' ? 'var(--tracking-display-sm)' : 'var(--tracking-display-md)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-xl)',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      textAlign: align === 'center' ? 'center' : 'left',
      flexDirection: align === 'center' ? 'column' : 'row',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-sm)',
      maxWidth: '640px'
    }
  }, eyebrow ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: '600 12px/1.4 var(--font-body)',
      letterSpacing: 'var(--tracking-caps)',
      textTransform: 'uppercase',
      color: 'var(--muted)'
    }
  }, eyebrow) : null, title ? /*#__PURE__*/React.createElement("h2", {
    style: {
      font,
      letterSpacing: track,
      fontVariationSettings: 'var(--font-display-variation)',
      color: 'var(--ink)',
      margin: 0
    }
  }, title) : null, body ? /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--text-body-md)',
      color: 'var(--body)',
      margin: 0
    }
  }, body) : null), action ? /*#__PURE__*/React.createElement("div", null, action) : null);
}
Object.assign(__ds_scope, { SectionHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/SectionHeading.jsx", error: String((e && e.message) || e) }); }

// components/display/StatBlock.jsx
try { (() => {
function StatBlock({
  value,
  label,
  tone = 'ink',
  style
}) {
  const color = tone === 'onDark' ? 'var(--on-dark)' : 'var(--ink)';
  const sub = tone === 'onDark' ? 'var(--on-dark-soft)' : 'var(--muted)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-xxs)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-display-md)',
      letterSpacing: 'var(--tracking-display-md)',
      fontVariationSettings: 'var(--font-display-variation)',
      color
    }
  }, value), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-body-sm)',
      color: sub
    }
  }, label));
}
Object.assign(__ds_scope, { StatBlock });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/StatBlock.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Checkbox({
  label,
  checked,
  defaultChecked,
  onChange,
  disabled = false,
  style,
  ...rest
}) {
  const [inner, setInner] = React.useState(!!defaultChecked);
  const on = checked === undefined ? inner : checked;
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-sm)',
      font: 'var(--text-body-md)',
      color: disabled ? 'var(--muted-soft)' : 'var(--body-strong)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      minHeight: '44px',
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    checked: on,
    disabled: disabled,
    onChange: e => {
      setInner(e.target.checked);
      onChange && onChange(e);
    },
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: '20px',
      height: '20px',
      flex: '0 0 20px',
      borderRadius: 'var(--radius-xs)',
      border: '1px solid ' + (on ? 'var(--primary)' : 'var(--hairline)'),
      background: on ? 'var(--primary)' : 'var(--canvas)',
      color: 'var(--on-primary)',
      display: 'grid',
      placeItems: 'center',
      font: '600 12px/1 var(--font-body)'
    }
  }, on ? '\u2713' : ''), label);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Field.jsx
try { (() => {
function Field({
  label,
  hint,
  error,
  htmlFor,
  required = false,
  style,
  children
}) {
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: htmlFor,
    style: {
      display: 'grid',
      gap: 'var(--space-xs)',
      ...style
    }
  }, label ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-title-sm)',
      color: 'var(--ink)'
    }
  }, label, required ? /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--muted-soft)',
      fontWeight: 400
    }
  }, " *") : null) : null, children, error ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-body-sm)',
      color: 'var(--error)'
    }
  }, error) : hint ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: '500 13px/1.4 var(--font-body)',
      color: 'var(--muted-soft)'
    }
  }, hint) : null);
}
Object.assign(__ds_scope, { Field });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Field.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const inputBase = {
  background: 'var(--canvas)',
  color: 'var(--ink)',
  font: 'var(--text-body-md)',
  borderRadius: 'var(--radius-md)',
  border: '1px solid var(--hairline)',
  padding: '12px 16px',
  height: 'var(--control-height)',
  width: '100%',
  outline: 'none',
  boxShadow: 'none'
};
function Input({
  invalid = false,
  disabled = false,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("input", _extends({
    disabled: disabled,
    onFocus: e => {
      setFocus(true);
      rest.onFocus && rest.onFocus(e);
    },
    onBlur: e => {
      setFocus(false);
      rest.onBlur && rest.onBlur(e);
    },
    style: {
      ...inputBase,
      borderColor: invalid ? 'var(--error)' : focus ? 'var(--primary)' : 'var(--hairline)',
      background: disabled ? 'var(--surface-soft)' : 'var(--canvas)',
      color: disabled ? 'var(--muted-soft)' : 'var(--ink)',
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { inputBase, Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Radio({
  label,
  checked,
  name,
  value,
  onChange,
  disabled = false,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-sm)',
      font: 'var(--text-body-md)',
      color: disabled ? 'var(--muted-soft)' : 'var(--body-strong)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      minHeight: '44px',
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "radio",
    name: name,
    value: value,
    checked: checked,
    disabled: disabled,
    onChange: onChange,
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: '20px',
      height: '20px',
      flex: '0 0 20px',
      borderRadius: 'var(--radius-pill)',
      border: '1px solid ' + (checked ? 'var(--primary)' : 'var(--hairline)'),
      background: 'var(--canvas)',
      display: 'grid',
      placeItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: '10px',
      height: '10px',
      borderRadius: 'var(--radius-pill)',
      background: checked ? 'var(--primary)' : 'transparent'
    }
  })), label);
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Select({
  options = [],
  placeholder,
  invalid = false,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      ...__ds_scope.inputBase,
      appearance: 'none',
      paddingRight: '40px',
      borderColor: invalid ? 'var(--error)' : focus ? 'var(--primary)' : 'var(--hairline)',
      ...style
    }
  }, rest), placeholder ? /*#__PURE__*/React.createElement("option", {
    value: ""
  }, placeholder) : null, options.map(o => {
    const value = typeof o === 'string' ? o : o.value;
    const label = typeof o === 'string' ? o : o.label;
    return /*#__PURE__*/React.createElement("option", {
      key: value,
      value: value
    }, label);
  })), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      right: '16px',
      top: '50%',
      transform: 'translateY(-50%)',
      pointerEvents: 'none',
      color: 'var(--muted)',
      font: 'var(--text-body-sm)'
    }
  }, "\u25BE"));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Textarea({
  rows = 4,
  invalid = false,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("textarea", _extends({
    rows: rows,
    onFocus: e => {
      setFocus(true);
      rest.onFocus && rest.onFocus(e);
    },
    onBlur: e => {
      setFocus(false);
      rest.onBlur && rest.onBlur(e);
    },
    style: {
      ...__ds_scope.inputBase,
      height: 'auto',
      resize: 'vertical',
      borderColor: invalid ? 'var(--error)' : focus ? 'var(--primary)' : 'var(--hairline)',
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/layout/Band.jsx
try { (() => {
const TONES = {
  canvas: {
    background: 'var(--canvas)',
    color: 'var(--body)'
  },
  soft: {
    background: 'var(--surface-soft)',
    color: 'var(--body)'
  },
  strong: {
    background: 'var(--surface-strong)',
    color: 'var(--body)'
  },
  dark: {
    background: 'var(--surface-dark)',
    color: 'var(--on-dark)'
  }
};
function Band({
  tone = 'canvas',
  pad = 'section',
  width = 'default',
  style,
  children
}) {
  const t = TONES[tone] || TONES.canvas;
  const padY = pad === 'tight' ? 'var(--space-xxl)' : pad === 'none' ? '0' : 'var(--space-section)';
  return /*#__PURE__*/React.createElement("section", {
    style: {
      ...t,
      padding: padY + ' var(--space-xl)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: width === 'narrow' ? '840px' : 'var(--content-max)',
      margin: '0 auto'
    }
  }, children));
}
Object.assign(__ds_scope, { Band });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/Band.jsx", error: String((e && e.message) || e) }); }

// components/layout/CtaBand.jsx
try { (() => {
function CtaBand({
  headline,
  body,
  actions,
  tone = 'soft',
  style
}) {
  const dark = tone === 'dark';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: dark ? 'var(--surface-dark)' : 'var(--surface-soft)',
      color: dark ? 'var(--on-dark)' : 'var(--ink)',
      borderRadius: 'var(--radius-xl)',
      padding: 'var(--pad-cta-band)',
      display: 'grid',
      gap: 'var(--space-lg)',
      justifyItems: 'center',
      textAlign: 'center',
      ...style
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      font: 'var(--text-display-md)',
      letterSpacing: 'var(--tracking-display-md)',
      fontVariationSettings: 'var(--font-display-variation)',
      color: dark ? 'var(--on-dark)' : 'var(--ink)',
      margin: 0,
      maxWidth: '720px'
    }
  }, headline), body ? /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--text-body-md)',
      color: dark ? 'var(--on-dark-soft)' : 'var(--body)',
      margin: 0,
      maxWidth: '560px'
    }
  }, body) : null, actions ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-sm)',
      flexWrap: 'wrap',
      justifyContent: 'center'
    }
  }, actions) : null);
}
Object.assign(__ds_scope, { CtaBand });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/CtaBand.jsx", error: String((e && e.message) || e) }); }

// components/layout/HeroBand.jsx
try { (() => {
function HeroBand({
  eyebrow,
  headline,
  body,
  actions,
  aside,
  motif = true,
  style
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--canvas)',
      padding: 'var(--pad-band) var(--space-xl)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--content-max)',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: 'minmax(0,7fr) minmax(0,5fr)',
      gap: 'var(--space-xxl)',
      alignItems: 'center'
    },
    "data-khov-hero": true
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-lg)'
    }
  }, eyebrow ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: '600 12px/1.4 var(--font-body)',
      letterSpacing: 'var(--tracking-caps)',
      textTransform: 'uppercase',
      color: 'var(--muted)'
    }
  }, eyebrow) : null, /*#__PURE__*/React.createElement("h1", {
    style: {
      font: 'var(--text-display-xl)',
      letterSpacing: 'var(--tracking-display-xl)',
      fontVariationSettings: 'var(--font-display-variation)',
      color: 'var(--ink)',
      margin: 0
    },
    "data-khov-hero-headline": true
  }, headline), body ? /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--text-body-md)',
      fontSize: '18px',
      color: 'var(--body)',
      margin: 0,
      maxWidth: '520px'
    }
  }, body) : null, actions ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-sm)',
      flexWrap: 'wrap',
      marginTop: 'var(--space-xs)'
    }
  }, actions) : null), /*#__PURE__*/React.createElement("div", {
    "data-khov-hero-aside": true,
    style: {
      display: 'grid'
    }
  }, aside || (motif ? /*#__PURE__*/React.createElement(__ds_scope.ArcMotif, {
    variant: "quarter",
    fill: "mist",
    height: 380
  }) : null))));
}
Object.assign(__ds_scope, { HeroBand });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/HeroBand.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Footer.jsx
try { (() => {
function Footer({
  brand,
  columns = [],
  note,
  legal,
  style
}) {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--surface-soft)',
      color: 'var(--body)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--content-max)',
      margin: '0 auto',
      padding: 'var(--pad-cta-band) var(--space-xl)',
      display: 'grid',
      gap: 'var(--space-xxl)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-xxl)',
      flexWrap: 'wrap',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-sm)',
      maxWidth: '280px'
    }
  }, brand, note ? /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--text-body-sm)',
      color: 'var(--muted)',
      margin: 0
    }
  }, note) : null), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-xxl)',
      flexWrap: 'wrap'
    }
  }, columns.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.title,
    style: {
      display: 'grid',
      gap: 'var(--space-sm)',
      minWidth: '140px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '600 12px/1.4 var(--font-body)',
      letterSpacing: 'var(--tracking-caps)',
      textTransform: 'uppercase',
      color: 'var(--muted-soft)'
    }
  }, c.title), (c.links || []).map(l => /*#__PURE__*/React.createElement("a", {
    key: l.label,
    href: l.href || '#',
    style: {
      font: 'var(--text-body-sm)',
      color: 'var(--muted)',
      textDecoration: 'none',
      borderBottom: 'none'
    }
  }, l.label)))))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--hairline)',
      paddingTop: 'var(--space-md)',
      font: '500 13px/1.4 var(--font-body)',
      color: 'var(--muted-soft)'
    }
  }, legal)));
}
Object.assign(__ds_scope, { Footer });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Footer.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function Tabs({
  tabs = [],
  value,
  onChange,
  style
}) {
  const [inner, setInner] = React.useState(tabs[0]);
  const current = value === undefined ? inner : value;
  return /*#__PURE__*/React.createElement("div", {
    role: "tablist",
    style: {
      display: 'flex',
      gap: 'var(--space-xxs)',
      flexWrap: 'wrap',
      ...style
    }
  }, tabs.map(t => {
    const on = t === current;
    return /*#__PURE__*/React.createElement("button", {
      key: t,
      role: "tab",
      "aria-selected": on,
      onClick: () => {
        setInner(t);
        onChange && onChange(t);
      },
      style: {
        font: 'var(--text-nav-link)',
        borderRadius: 'var(--radius-pill)',
        padding: '8px 16px',
        minHeight: '36px',
        border: 'none',
        cursor: 'pointer',
        background: on ? 'var(--surface-card)' : 'transparent',
        color: on ? 'var(--ink)' : 'var(--muted)'
      }
    }, t);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/navigation/TopNav.jsx
try { (() => {
function TopNav({
  brand,
  links = [],
  action,
  active,
  onNavigate,
  sticky = true,
  style
}) {
  const [open, setOpen] = React.useState(false);
  return /*#__PURE__*/React.createElement("header", {
    style: {
      background: 'var(--canvas)',
      borderBottom: '1px solid var(--hairline)',
      position: sticky ? 'sticky' : 'static',
      top: 0,
      zIndex: 20,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--content-max)',
      margin: '0 auto',
      height: 'var(--nav-height)',
      padding: '0 var(--space-xl)',
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-xl)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center'
    }
  }, brand), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 'var(--space-lg)',
      marginLeft: 'auto',
      alignItems: 'center'
    },
    "data-khov-nav-links": true
  }, links.map(l => {
    const on = active === l.label || active === l.href;
    return /*#__PURE__*/React.createElement("a", {
      key: l.label,
      href: l.href || '#',
      onClick: e => {
        if (onNavigate) {
          e.preventDefault();
          onNavigate(l);
        }
      },
      style: {
        font: 'var(--text-nav-link)',
        color: on ? 'var(--ink)' : 'var(--muted)',
        textDecoration: 'none',
        borderBottom: 'none',
        paddingBottom: '2px',
        boxShadow: on ? 'inset 0 -1px 0 var(--primary)' : 'none'
      }
    }, l.label);
  })), action ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center'
    }
  }, action) : null, /*#__PURE__*/React.createElement("button", {
    "aria-label": "Menu",
    onClick: () => setOpen(!open),
    "data-khov-nav-toggle": true,
    style: {
      display: 'none',
      width: '44px',
      height: '44px',
      border: '1px solid var(--hairline)',
      borderRadius: 'var(--radius-md)',
      background: 'var(--canvas)',
      cursor: 'pointer',
      flexDirection: 'column',
      gap: '4px',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: '18px',
      height: '1.5px',
      background: 'var(--ink)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: '18px',
      height: '1.5px',
      background: 'var(--ink)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: '18px',
      height: '1.5px',
      background: 'var(--ink)'
    }
  }))), open ? /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--hairline)',
      padding: 'var(--space-md) var(--space-xl)',
      display: 'grid',
      gap: 'var(--space-sm)'
    }
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l.label,
    href: l.href || '#',
    onClick: e => {
      if (onNavigate) {
        e.preventDefault();
        onNavigate(l);
        setOpen(false);
      }
    },
    style: {
      font: 'var(--text-title-sm)',
      color: 'var(--ink)',
      textDecoration: 'none',
      borderBottom: 'none',
      minHeight: '44px',
      display: 'flex',
      alignItems: 'center'
    }
  }, l.label))) : null);
}
Object.assign(__ds_scope, { TopNav });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/TopNav.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/App.jsx
try { (() => {
function About({
  go
}) {
  const {
    Band,
    SectionHeading,
    ContentCard,
    FeatureCard,
    StatBlock,
    Button,
    CtaBand,
    ArcMotif
  } = window.KHOVGroupDesignSystem_5d414f;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Band, {
    pad: "tight"
  }, /*#__PURE__*/React.createElement("div", {
    className: "khov-grid-2",
    style: {
      gap: 'var(--space-section)',
      alignItems: 'center',
      paddingTop: 'var(--space-xl)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-lg)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "khov-caption-caps"
  }, "About"), /*#__PURE__*/React.createElement("h1", {
    className: "khov-display-lg"
  }, "Seventeen years in the same market."), /*#__PURE__*/React.createElement("p", {
    className: "khov-body-md",
    style: {
      fontSize: '18px'
    }
  }, "KHOV Group has worked with DC-area businesses since 2009. We are eleven people, we do not resell hardware, and we do not take commissions from vendors.")), /*#__PURE__*/React.createElement(ArcMotif, {
    variant: "quarter",
    fill: "mist",
    height: 300,
    flip: true
  }))), /*#__PURE__*/React.createElement(Band, null, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "How we are set up",
    title: "Small on purpose.",
    size: "sm",
    body: "Eleven people means the person who scoped your work is the person who does it."
  }), /*#__PURE__*/React.createElement("div", {
    className: "khov-grid-3",
    style: {
      marginTop: 'var(--space-xl)'
    }
  }, /*#__PURE__*/React.createElement(FeatureCard, {
    color: "deep",
    title: "Vendor-neutral",
    body: "No commissions, no resale margin. If the cheaper tool is the right tool, that is the recommendation."
  }), /*#__PURE__*/React.createElement(FeatureCard, {
    color: "aqua",
    title: "Documented",
    body: "Everything we learn about your systems is written down, in a repository you own."
  }), /*#__PURE__*/React.createElement(FeatureCard, {
    color: "dune",
    title: "Month-to-month",
    body: "After the first quarter, every retainer is cancellable with 30 days' notice."
  }))), /*#__PURE__*/React.createElement(Band, {
    tone: "soft",
    pad: "tight"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-xxl)',
      flexWrap: 'wrap',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement(StatBlock, {
    value: "2009",
    label: "Founded in Alexandria"
  }), /*#__PURE__*/React.createElement(StatBlock, {
    value: "11",
    label: "People"
  }), /*#__PURE__*/React.createElement(StatBlock, {
    value: "38",
    label: "Companies under management"
  }), /*#__PURE__*/React.createElement(StatBlock, {
    value: "94%",
    label: "Annual renewal rate"
  }))), /*#__PURE__*/React.createElement(Band, {
    pad: "tight"
  }, /*#__PURE__*/React.createElement(CtaBand, {
    headline: "We are easy to talk to before you commit to anything.",
    actions: /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      size: "lg",
      onClick: () => go('contact')
    }, "Book a discovery call")
  })));
}
function App() {
  const [page, setPage] = React.useState('home');
  const go = p => {
    setPage(p);
    window.scrollTo(0, 0);
  };
  const body = page === 'services' ? /*#__PURE__*/React.createElement(Services, {
    go: go
  }) : page === 'work' ? /*#__PURE__*/React.createElement(CaseStudy, {
    go: go
  }) : page === 'about' ? /*#__PURE__*/React.createElement(About, {
    go: go
  }) : page === 'contact' ? /*#__PURE__*/React.createElement(Contact, {
    go: go
  }) : /*#__PURE__*/React.createElement(Home, {
    go: go
  });
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--canvas)',
      minHeight: '100vh'
    }
  }, /*#__PURE__*/React.createElement(Nav, {
    page: page,
    go: go
  }), body, /*#__PURE__*/React.createElement(SiteFooter, {
    go: go
  }));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/CaseStudy.jsx
try { (() => {
function CaseStudy({
  go
}) {
  const {
    Band,
    SectionHeading,
    FeatureCard,
    ContentCard,
    QuoteCard,
    StatBlock,
    Badge,
    Button,
    TextLink,
    Tabs,
    Icon,
    ArcMotif,
    CtaBand
  } = window.KHOVGroupDesignSystem_5d414f;
  const [tab, setTab] = React.useState('Rowan Dental');
  const studies = {
    'Rowan Dental': {
      sector: 'Healthcare · 11 locations',
      headline: 'Eleven offices, one set of records, no downtime on a Monday.',
      summary: 'Rowan ran a different server in every practice. We consolidated to one identity and one records path over nine weekends, without closing a chair.',
      stats: [['9 wks', 'End to end'], ['0 hrs', 'Patient-facing downtime'], ['$61k', 'Annual run-rate removed']],
      problem: 'Eleven practices, eleven servers, eleven backup routines — three of which had silently stopped. Front-desk staff kept patient lists in local spreadsheets because the shared drive was too slow to trust.',
      work: ['Inventory and dependency map across all locations', 'Single identity provider with role-based access', 'Records consolidation, one practice per weekend', 'Backup verification with monthly restore tests', 'Two training sessions per site, run by us'],
      after: 'One system, one login, verified restores, and an office manager at each site who knows what to do when something looks wrong.'
    },
    'Halden Partners': {
      sector: 'Professional services · 120 staff',
      headline: 'A security review that survived the insurance renewal.',
      summary: 'Halden needed written policies and evidence of controls before their cyber policy renewed. We ran the review, fixed the top eight findings and wrote the file.',
      stats: [['6 wks', 'Review to renewal'], ['8', 'Findings closed'], ['31%', 'Premium reduction']],
      problem: 'No written policies, shared admin accounts, and a partner group that had never seen a risk list in plain language.',
      work: ['Exposure review across identity, endpoints and vendors', 'Ranked risk list with cost-of-incident estimates', 'Multi-factor rollout in four staged waves', 'Written policy set accepted by the insurer', 'Partner-level readout, 90 minutes'],
      after: 'A policy file the insurer accepted, multi-factor on every account, and a quarterly review the partners now run themselves.'
    }
  };
  const s = studies[tab];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Band, {
    pad: "tight"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      paddingTop: 'var(--space-xl)',
      display: 'grid',
      gap: 'var(--space-lg)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "khov-caption-caps"
  }, "Selected work"), /*#__PURE__*/React.createElement(Tabs, {
    tabs: Object.keys(studies),
    value: tab,
    onChange: setTab
  }))), /*#__PURE__*/React.createElement(Band, {
    pad: "tight"
  }, /*#__PURE__*/React.createElement("div", {
    className: "khov-grid-2",
    style: {
      gap: 'var(--space-section)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-lg)'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "mist"
  }, s.sector), /*#__PURE__*/React.createElement("h1", {
    className: "khov-display-md"
  }, s.headline), /*#__PURE__*/React.createElement("p", {
    className: "khov-body-md",
    style: {
      fontSize: '18px'
    }
  }, s.summary)), /*#__PURE__*/React.createElement(FeatureCard, {
    color: "deep",
    eyebrow: "Outcome",
    title: "By the numbers"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-lg)',
      marginTop: 'var(--space-md)'
    }
  }, s.stats.map(([v, l]) => /*#__PURE__*/React.createElement(StatBlock, {
    key: l,
    value: v,
    label: l,
    tone: "onDark"
  })))))), /*#__PURE__*/React.createElement(Band, null, /*#__PURE__*/React.createElement("div", {
    className: "khov-grid-3"
  }, /*#__PURE__*/React.createElement(ContentCard, {
    eyebrow: "Before",
    title: "What we found",
    body: s.problem
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-lg)',
      padding: 'var(--pad-card-content)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "khov-caption-caps",
    style: {
      marginBottom: 'var(--space-sm)'
    }
  }, "The work"), /*#__PURE__*/React.createElement("ul", {
    style: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
      display: 'grid',
      gap: 'var(--space-sm)'
    }
  }, s.work.map(w => /*#__PURE__*/React.createElement("li", {
    key: w,
    style: {
      display: 'flex',
      gap: 'var(--space-xs)',
      font: 'var(--text-body-sm)',
      color: 'var(--body-strong)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 18,
    style: {
      background: 'var(--card-aqua)',
      marginTop: '2px'
    }
  }), w)))), /*#__PURE__*/React.createElement(ContentCard, {
    eyebrow: "After",
    title: "Where it landed",
    body: s.after
  }))), /*#__PURE__*/React.createElement(Band, {
    tone: "soft"
  }, /*#__PURE__*/React.createElement("div", {
    className: "khov-grid-2",
    style: {
      gap: 'var(--space-section)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(QuoteCard, {
    quote: "The weekend cutovers were the part we dreaded. We opened Monday and nobody noticed anything had changed.",
    name: tab === 'Rowan Dental' ? 'Dana Okoye' : 'Marcus Halden',
    role: tab === 'Rowan Dental' ? 'Chief Operating Officer, Rowan Dental Group' : 'Managing Partner, Halden Partners'
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-md)'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Similar engagements",
    title: "We have done this before.",
    size: "sm"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-sm)'
    }
  }, ['Non-profit, 60 staff — shared drive to cloud in 5 weeks', 'Law firm, 90 staff — identity cleanup and MFA', 'Clinic group, 4 sites — backup and restore program'].map(t => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      gap: 'var(--space-md)',
      padding: 'var(--space-sm) 0',
      borderBottom: '1px solid var(--hairline)',
      font: 'var(--text-body-sm)',
      color: 'var(--body)'
    }
  }, t, /*#__PURE__*/React.createElement(TextLink, {
    size: "sm",
    withArrow: true
  }, "Read"))))))), /*#__PURE__*/React.createElement(Band, {
    pad: "tight"
  }, /*#__PURE__*/React.createElement(CtaBand, {
    headline: "Your version of this is probably smaller than you think.",
    actions: /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      size: "lg",
      onClick: () => go('contact')
    }, "Book a discovery call")
  })));
}
Object.assign(window, {
  CaseStudy
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/CaseStudy.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Contact.jsx
try { (() => {
function Contact() {
  const {
    Band,
    SectionHeading,
    Field,
    Input,
    Textarea,
    Select,
    Checkbox,
    Radio,
    Button,
    FeatureCard,
    Badge,
    Icon,
    ArcMotif
  } = window.KHOVGroupDesignSystem_5d414f;
  const [sent, setSent] = React.useState(false);
  const [need, setNeed] = React.useState('assessment');
  const [email, setEmail] = React.useState('');
  const [touched, setTouched] = React.useState(false);
  const invalid = touched && !/^\S+@\S+\.\S+$/.test(email);
  return /*#__PURE__*/React.createElement(Band, {
    pad: "tight"
  }, /*#__PURE__*/React.createElement("div", {
    className: "khov-grid-2",
    style: {
      gap: 'var(--space-section)',
      alignItems: 'start',
      paddingTop: 'var(--space-xl)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-lg)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "khov-caption-caps"
  }, "Contact"), /*#__PURE__*/React.createElement("h1", {
    className: "khov-display-md"
  }, "Two sentences is enough to start."), /*#__PURE__*/React.createElement("p", {
    className: "khov-body-md",
    style: {
      fontSize: '18px'
    }
  }, "Tell us what is not working. We reply within one business day, and the first call is 30 minutes with an engineer, not a salesperson."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-sm)',
      marginTop: 'var(--space-xs)'
    }
  }, [['phone', '(703) 555-0148'], ['mail', 'hello@khovgroup.com'], ['map-pin', '1300 King Street, Alexandria, VA 22314'], ['clock', 'Mon–Fri, 8am–6pm ET']].map(([i, t]) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      display: 'flex',
      gap: 'var(--space-sm)',
      alignItems: 'center',
      font: 'var(--text-body-md)',
      color: 'var(--body-strong)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: i,
    size: 18,
    style: {
      background: 'var(--accent-stone)'
    }
  }), t))), /*#__PURE__*/React.createElement(FeatureCard, {
    color: "seaglass",
    eyebrow: "Already a client?",
    title: "Support line",
    body: "Existing retainer clients use the support number in your onboarding pack \u2014 it routes to your named engineer first.",
    style: {
      marginTop: 'var(--space-md)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--canvas)',
      border: '1px solid var(--hairline)',
      borderRadius: 'var(--radius-lg)',
      padding: 'var(--space-xl)'
    }
  }, sent ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-md)',
      justifyItems: 'start'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "success"
  }, "Received"), /*#__PURE__*/React.createElement("h2", {
    className: "khov-display-sm"
  }, "Thanks \u2014 we have it."), /*#__PURE__*/React.createElement("p", {
    className: "khov-body-md"
  }, "You will hear from someone on the engineering side within one business day. If it is urgent, call (703) 555-0148."), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    onClick: () => setSent(false)
  }, "Send another")) : /*#__PURE__*/React.createElement("form", {
    style: {
      display: 'grid',
      gap: 'var(--space-lg)'
    },
    onSubmit: e => {
      e.preventDefault();
      setSent(true);
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "khov-grid-2",
    style: {
      gap: 'var(--space-md)'
    }
  }, /*#__PURE__*/React.createElement(Field, {
    label: "Name",
    required: true
  }, /*#__PURE__*/React.createElement(Input, {
    placeholder: "Jordan Reyes"
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Company",
    required: true
  }, /*#__PURE__*/React.createElement(Input, {
    placeholder: "Rowan Dental Group"
  }))), /*#__PURE__*/React.createElement(Field, {
    label: "Work email",
    required: true,
    hint: "We reply within one business day",
    error: invalid ? 'Enter a valid work email' : undefined
  }, /*#__PURE__*/React.createElement(Input, {
    placeholder: "you@company.com",
    value: email,
    invalid: invalid,
    onChange: e => setEmail(e.target.value),
    onBlur: () => setTouched(true)
  })), /*#__PURE__*/React.createElement("div", {
    className: "khov-grid-2",
    style: {
      gap: 'var(--space-md)'
    }
  }, /*#__PURE__*/React.createElement(Field, {
    label: "Company size"
  }, /*#__PURE__*/React.createElement(Select, {
    placeholder: "Select one",
    options: ['Under 20', '20–99', '100–399', '400+']
  })), /*#__PURE__*/React.createElement(Field, {
    label: "How did you find us?"
  }, /*#__PURE__*/React.createElement(Select, {
    placeholder: "Optional",
    options: ['Referral', 'Search', 'Event', 'Existing client']
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-xxs)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-title-sm)',
      color: 'var(--ink)'
    }
  }, "What do you need?"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-lg)',
      flexWrap: 'wrap'
    }
  }, [['assessment', 'Assessment'], ['managed', 'Managed IT'], ['project', 'A project']].map(([k, l]) => /*#__PURE__*/React.createElement(Radio, {
    key: k,
    name: "need",
    value: k,
    label: l,
    checked: need === k,
    onChange: () => setNeed(k)
  })))), /*#__PURE__*/React.createElement(Field, {
    label: "What is not working?",
    required: true
  }, /*#__PURE__*/React.createElement(Textarea, {
    rows: 4,
    placeholder: "A few sentences is plenty."
  })), /*#__PURE__*/React.createElement(Checkbox, {
    label: "Send me the quarterly note"
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    size: "lg",
    type: "submit",
    fullWidth: true
  }, "Send it over"), /*#__PURE__*/React.createElement("p", {
    className: "khov-caption"
  }, "We do not share your details with vendors or partners.")))));
}
Object.assign(window, {
  Contact
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Contact.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Home.jsx
try { (() => {
function Home({
  go
}) {
  const {
    Band,
    HeroBand,
    SectionHeading,
    FeatureCard,
    ContentCard,
    QuoteCard,
    CtaBand,
    Button,
    TextLink,
    Badge,
    StatBlock,
    Icon,
    ArcMotif
  } = window.KHOVGroupDesignSystem_5d414f;
  const services = [{
    color: 'deep',
    icon: 'server',
    title: 'Managed IT',
    body: 'One team on the other end of the phone, with your systems already documented.'
  }, {
    color: 'aqua',
    icon: 'cloud',
    title: 'Cloud migration',
    body: 'Move once, move properly, and know what it costs before you start.'
  }, {
    color: 'dune',
    icon: 'shield-check',
    title: 'Security review',
    body: 'A plain-language picture of your exposure and what to fix first.'
  }];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(HeroBand, {
    eyebrow: "Technology consulting \xB7 Washington DC",
    headline: "Bring us the system nobody wants to touch.",
    body: "KHOV Group takes on the technology problem your team has stopped talking about, then hands back something you can run without us.",
    actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      variant: "accent",
      size: "lg",
      onClick: () => go('contact')
    }, "Book a discovery call"), /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      size: "lg",
      onClick: () => go('work')
    }, "See our work"))
  }), /*#__PURE__*/React.createElement(Band, {
    pad: "tight"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-xxl)',
      flexWrap: 'wrap',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement(StatBlock, {
    value: "17 yrs",
    label: "Serving DC-area businesses"
  }), /*#__PURE__*/React.createElement(StatBlock, {
    value: "94%",
    label: "Clients renewing annually"
  }), /*#__PURE__*/React.createElement(StatBlock, {
    value: "2 wks",
    label: "Typical assessment"
  }), /*#__PURE__*/React.createElement(StatBlock, {
    value: "38",
    label: "Companies under management"
  }))), /*#__PURE__*/React.createElement(Band, null, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "What we do",
    title: "Three ways in",
    body: "Most engagements start with a two-week assessment. The rest follows from what it finds.",
    action: /*#__PURE__*/React.createElement(TextLink, {
      withArrow: true,
      onClick: e => {
        e.preventDefault();
        go('services');
      }
    }, "All services")
  }), /*#__PURE__*/React.createElement("div", {
    className: "khov-grid-3",
    style: {
      marginTop: 'var(--space-xxl)'
    }
  }, services.map(s => /*#__PURE__*/React.createElement(FeatureCard, {
    key: s.title,
    color: s.color,
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: s.icon,
      size: 26
    }),
    title: s.title,
    body: s.body,
    footer: /*#__PURE__*/React.createElement(Button, {
      variant: "onColor",
      size: "sm",
      onClick: () => go('services')
    }, "How it works")
  })))), /*#__PURE__*/React.createElement(Band, {
    tone: "soft"
  }, /*#__PURE__*/React.createElement("div", {
    className: "khov-grid-2",
    style: {
      alignItems: 'center',
      gap: 'var(--space-section)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-lg)'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "How we work",
    title: "Documented, then handed over.",
    size: "sm",
    body: "We write down what we find, we leave the documentation with you, and we tell you when you no longer need us."
  }), /*#__PURE__*/React.createElement("ul", {
    style: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
      display: 'grid',
      gap: 'var(--space-sm)'
    }
  }, ['A named engineer, not a ticket queue', 'Fixed-fee assessments with a written roadmap', 'Month-to-month retainers after the first quarter'].map(t => /*#__PURE__*/React.createElement("li", {
    key: t,
    style: {
      display: 'flex',
      gap: 'var(--space-sm)',
      font: 'var(--text-body-md)',
      color: 'var(--body)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 20,
    style: {
      background: 'var(--card-aqua)',
      marginTop: '2px'
    }
  }), t)))), /*#__PURE__*/React.createElement(QuoteCard, {
    quote: "They fixed the thing we had stopped talking about, then showed our office manager how to keep it fixed.",
    name: "Dana Okoye",
    role: "Chief Operating Officer, Rowan Dental Group"
  }))), /*#__PURE__*/React.createElement(Band, null, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Notes",
    title: "What we have been writing",
    size: "sm",
    action: /*#__PURE__*/React.createElement(TextLink, {
      withArrow: true
    }, "All notes")
  }), /*#__PURE__*/React.createElement("div", {
    className: "khov-grid-3",
    style: {
      marginTop: 'var(--space-xl)'
    }
  }, [{
    e: 'Cloud',
    t: 'What a shared-drive migration actually costs',
    b: 'The license bill is the small part. Here is the rest.'
  }, {
    e: 'Security',
    t: 'Multi-factor without a helpdesk revolt',
    b: 'A rollout order that keeps your staff on your side.'
  }, {
    e: 'Operations',
    t: 'The five documents every small office needs',
    b: 'If you lost your IT person tomorrow, this is the list.'
  }].map(p => /*#__PURE__*/React.createElement(ContentCard, {
    key: p.t,
    eyebrow: p.e,
    title: p.t,
    body: p.b,
    footer: /*#__PURE__*/React.createElement(TextLink, {
      size: "sm",
      withArrow: true
    }, "Read")
  })))), /*#__PURE__*/React.createElement(Band, {
    pad: "tight"
  }, /*#__PURE__*/React.createElement(CtaBand, {
    headline: "Tell us what is not working.",
    body: "A 30-minute call, no deck, no pressure. If we are not the right fit we will say so.",
    actions: /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      size: "lg",
      onClick: () => go('contact')
    }, "Book a discovery call")
  })));
}
Object.assign(window, {
  Home
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Home.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Services.jsx
try { (() => {
function Services({
  go
}) {
  const {
    Band,
    SectionHeading,
    Tabs,
    FeatureCard,
    TierCard,
    ContentCard,
    Button,
    Badge,
    Icon,
    ArcMotif,
    CtaBand
  } = window.KHOVGroupDesignSystem_5d414f;
  const [filter, setFilter] = React.useState('All');
  const all = [{
    color: 'deep',
    cat: 'Managed IT',
    icon: 'server',
    title: 'Day-to-day support',
    body: 'Helpdesk, patching, backups and a monthly report you can read in five minutes.'
  }, {
    color: 'aqua',
    cat: 'Cloud',
    icon: 'cloud',
    title: 'Migration planning',
    body: 'Inventory, sequencing and a cost model before anything moves.'
  }, {
    color: 'dune',
    cat: 'Security',
    icon: 'shield-check',
    title: 'Exposure review',
    body: 'Where the real risk sits, ranked by what it would cost you.'
  }, {
    color: 'coral',
    cat: 'Managed IT',
    icon: 'users',
    title: 'Onboarding and offboarding',
    body: 'One checklist, run the same way every time, with proof it was run.'
  }, {
    color: 'seaglass',
    cat: 'Cloud',
    icon: 'database',
    title: 'File and identity cleanup',
    body: 'Untangle the accounts and permissions that grew sideways for a decade.'
  }, {
    color: 'cream',
    cat: 'Security',
    icon: 'lock',
    title: 'Policy and compliance',
    body: 'Written policies your insurer and your auditor both accept.'
  }];
  const shown = filter === 'All' ? all : all.filter(s => s.cat === filter);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Band, {
    pad: "tight"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-lg)',
      maxWidth: '760px',
      paddingTop: 'var(--space-xl)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "khov-caption-caps"
  }, "Services"), /*#__PURE__*/React.createElement("h1", {
    className: "khov-display-lg"
  }, "Pick the smallest engagement that answers your question."), /*#__PURE__*/React.createElement("p", {
    className: "khov-body-md",
    style: {
      fontSize: '18px'
    }
  }, "Every service below can be bought on its own. Most clients start with an assessment and let the findings decide the rest."))), /*#__PURE__*/React.createElement(Band, {
    pad: "tight"
  }, /*#__PURE__*/React.createElement(Tabs, {
    tabs: ['All', 'Managed IT', 'Cloud', 'Security'],
    value: filter,
    onChange: setFilter
  }), /*#__PURE__*/React.createElement("div", {
    className: "khov-grid-3",
    style: {
      marginTop: 'var(--space-xl)'
    }
  }, shown.map(s => /*#__PURE__*/React.createElement(FeatureCard, {
    key: s.title,
    color: s.color,
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: s.icon,
      size: 26
    }),
    eyebrow: s.cat,
    title: s.title,
    body: s.body
  })))), /*#__PURE__*/React.createElement(Band, {
    tone: "soft"
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Engagements",
    title: "Three ways to buy",
    body: "Assessment first, then a retainer if it makes sense. No multi-year contracts."
  }), /*#__PURE__*/React.createElement("div", {
    className: "khov-grid-3",
    style: {
      marginTop: 'var(--space-xxl)'
    }
  }, /*#__PURE__*/React.createElement(TierCard, {
    name: "Assessment",
    price: "$6,500",
    cadence: "one-time, two weeks",
    description: "A written picture of what you run, what it costs and what breaks first.",
    features: ['Systems and vendor inventory', 'Risk list, ranked', 'Written 12-month roadmap', 'Two-hour readout with your team'],
    action: /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      fullWidth: true,
      onClick: () => go('contact')
    }, "Start here")
  }), /*#__PURE__*/React.createElement(TierCard, {
    featured: true,
    name: "Managed",
    price: "$4,800",
    cadence: "per month",
    description: "We run the day-to-day and keep the roadmap moving.",
    features: ['Named engineer and backup', '24/7 monitoring and patching', 'Quarterly roadmap review', 'Vendor management included', 'Month-to-month after quarter one'],
    action: /*#__PURE__*/React.createElement(Button, {
      variant: "onColor",
      fullWidth: true,
      onClick: () => go('contact')
    }, "Talk to us")
  }), /*#__PURE__*/React.createElement(TierCard, {
    name: "Project",
    price: "From $18,000",
    cadence: "scoped per engagement",
    description: "A defined migration, rollout or cleanup with a fixed end date.",
    features: ['Fixed fee, fixed scope', 'Weekly written status', 'Documentation handover', 'Optional 60-day watch period'],
    action: /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      fullWidth: true,
      onClick: () => go('contact')
    }, "Scope a project")
  }))), /*#__PURE__*/React.createElement(Band, null, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Questions",
    title: "Asked on most first calls",
    size: "sm"
  }), /*#__PURE__*/React.createElement("div", {
    className: "khov-grid-2",
    style: {
      marginTop: 'var(--space-xl)'
    }
  }, [{
    t: 'Do you replace our current IT person?',
    b: 'Usually not. We more often sit alongside an internal person and take the parts they cannot cover.'
  }, {
    t: 'What size company do you work with?',
    b: 'Between 15 and 400 staff, mostly professional services, healthcare and non-profits in the DC area.'
  }, {
    t: 'Can we start with one project?',
    b: 'Yes. A project engagement needs no retainer, and there is no obligation afterwards.'
  }, {
    t: 'Who owns the documentation?',
    b: 'You do, from day one, in a repository you control.'
  }].map(q => /*#__PURE__*/React.createElement(ContentCard, {
    key: q.t,
    title: q.t,
    body: q.b
  })))), /*#__PURE__*/React.createElement(Band, {
    pad: "tight"
  }, /*#__PURE__*/React.createElement(CtaBand, {
    headline: "Not sure which one you need?",
    body: "Describe the problem in two sentences and we will tell you the smallest thing that fixes it.",
    actions: /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      size: "lg",
      onClick: () => go('contact')
    }, "Book a discovery call")
  })));
}
Object.assign(window, {
  Services
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Services.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Site.jsx
try { (() => {
const KHOV = window.KHOVGroupDesignSystem_5d414f;

/** Nav labels are lowercase keys; render them title-cased without changing routing. */
function Nav({
  page,
  go
}) {
  const {
    TopNav,
    Wordmark,
    Button
  } = KHOV;
  const items = [{
    label: 'Services',
    key: 'services'
  }, {
    label: 'Work',
    key: 'work'
  }, {
    label: 'About',
    key: 'about'
  }, {
    label: 'Contact',
    key: 'contact'
  }];
  return /*#__PURE__*/React.createElement(TopNav, {
    brand: /*#__PURE__*/React.createElement("a", {
      href: "#",
      onClick: e => {
        e.preventDefault();
        go('home');
      },
      style: {
        borderBottom: 'none',
        display: 'flex'
      }
    }, /*#__PURE__*/React.createElement(Wordmark, {
      size: 20
    })),
    active: items.find(i => i.key === page)?.label,
    links: items,
    onNavigate: l => go(items.find(i => i.label === l.label).key),
    action: /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      size: "sm",
      onClick: () => go('contact')
    }, "Book a call")
  });
}
function SiteFooter({
  go
}) {
  const {
    Footer,
    Wordmark,
    ArcMotif
  } = KHOV;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(ArcMotif, {
    variant: "rule",
    fill: "mist",
    height: 64
  }), /*#__PURE__*/React.createElement(Footer, {
    brand: /*#__PURE__*/React.createElement(Wordmark, {
      size: 20
    }),
    note: "Technology consulting for small and mid-size businesses in the DC area.",
    columns: [{
      title: 'Services',
      links: [{
        label: 'Managed IT'
      }, {
        label: 'Cloud migration'
      }, {
        label: 'Security review'
      }, {
        label: 'Assessment'
      }]
    }, {
      title: 'Company',
      links: [{
        label: 'About'
      }, {
        label: 'Work'
      }, {
        label: 'Notes'
      }, {
        label: 'Contact'
      }]
    }, {
      title: 'Office',
      links: [{
        label: '1300 King Street'
      }, {
        label: 'Alexandria, VA 22314'
      }, {
        label: '(703) 555-0148'
      }]
    }],
    legal: "\xA9 2026 KHOV Group LLC. All rights reserved."
  }));
}
Object.assign(window, {
  Nav,
  SiteFooter,
  KHOV
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Site.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.TextLink = __ds_scope.TextLink;

__ds_ns.ArcMotif = __ds_scope.ArcMotif;

__ds_ns.Wordmark = __ds_scope.Wordmark;

__ds_ns.ContentCard = __ds_scope.ContentCard;

__ds_ns.FeatureCard = __ds_scope.FeatureCard;

__ds_ns.QuoteCard = __ds_scope.QuoteCard;

__ds_ns.TierCard = __ds_scope.TierCard;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.SectionHeading = __ds_scope.SectionHeading;

__ds_ns.StatBlock = __ds_scope.StatBlock;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Field = __ds_scope.Field;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.Band = __ds_scope.Band;

__ds_ns.CtaBand = __ds_scope.CtaBand;

__ds_ns.HeroBand = __ds_scope.HeroBand;

__ds_ns.Footer = __ds_scope.Footer;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.TopNav = __ds_scope.TopNav;

})();
