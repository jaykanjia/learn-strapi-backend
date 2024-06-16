import type { Schema, Attribute } from '@strapi/strapi';

export interface ComponentsFeature extends Schema.Component {
  collectionName: 'components_components_features';
  info: {
    displayName: 'Feature';
    description: '';
  };
  attributes: {
    heading: Attribute.String & Attribute.Required;
    subHeading: Attribute.Text;
    icon: Attribute.Enumeration<['CLOCK_ICON', 'CHECK_ICON', 'CLOUD_ICON']> &
      Attribute.DefaultTo<'CHECK_ICON'>;
  };
}

export interface ComponentsInputField extends Schema.Component {
  collectionName: 'components_components_input_fields';
  info: {
    displayName: 'inputField';
    icon: 'bulletList';
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    inputType: Attribute.Enumeration<
      ['input', 'textarea', 'select', 'imagePicker']
    >;
    props: Attribute.JSON;
    rules: Attribute.JSON;
    defaultValue: Attribute.String;
  };
}

export interface ComponentsLink extends Schema.Component {
  collectionName: 'components_components_links';
  info: {
    displayName: 'Link';
  };
  attributes: {
    url: Attribute.String & Attribute.Required & Attribute.DefaultTo<'/'>;
    text: Attribute.String;
    isExternal: Attribute.Boolean & Attribute.DefaultTo<false>;
  };
}

export interface LayoutFeaturesSection extends Schema.Component {
  collectionName: 'components_layout_features_sections';
  info: {
    displayName: 'Features Section';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.Text;
    features: Attribute.Component<'components.feature', true>;
  };
}

export interface LayoutFooter extends Schema.Component {
  collectionName: 'components_layout_footers';
  info: {
    displayName: 'Footer';
    description: '';
  };
  attributes: {
    logoText: Attribute.Component<'components.link'>;
    text: Attribute.Text;
    socialLinks: Attribute.Component<'components.link', true>;
  };
}

export interface LayoutHeader extends Schema.Component {
  collectionName: 'components_layout_headers';
  info: {
    displayName: 'Header';
  };
  attributes: {
    logoText: Attribute.Component<'components.link'>;
    ctaButton: Attribute.Component<'components.link'>;
  };
}

export interface LayoutHeroSection extends Schema.Component {
  collectionName: 'components_layout_hero_sections';
  info: {
    displayName: 'Hero Section';
    description: '';
  };
  attributes: {
    heading: Attribute.String & Attribute.Required;
    subHeading: Attribute.Text;
    image: Attribute.Media<'images'> & Attribute.Required;
    link: Attribute.Component<'components.link'>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'components.feature': ComponentsFeature;
      'components.input-field': ComponentsInputField;
      'components.link': ComponentsLink;
      'layout.features-section': LayoutFeaturesSection;
      'layout.footer': LayoutFooter;
      'layout.header': LayoutHeader;
      'layout.hero-section': LayoutHeroSection;
    }
  }
}
