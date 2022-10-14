<?php

namespace Drupal\motional_customizations\Plugin\Field\FieldWidget;

use Drupal\Core\Extension\ThemeExtensionList;
use Drupal\Core\Field\FieldDefinitionInterface;
use Drupal\Core\Field\FieldItemListInterface;
use Drupal\Core\Field\Plugin\Field\FieldWidget\OptionsWidgetBase;
use Drupal\Core\Form\FormStateInterface;
use Symfony\Component\DependencyInjection\ContainerInterface;

/**
 * Plugin implementation of the 'options_icons' widget.
 *
 * @FieldWidget(
 *   id = "options_icons",
 *   label = @Translation("Icons list"),
 *   field_types = {
 *     "list_string"
 *   },
 *   multiple_values = FALSE
 * )
 */
class OptionsIconsWidget extends OptionsWidgetBase {

  /**
   * The theme extension list.
   *
   * @var \Drupal\Core\Extension\ThemeExtensionList
   */
  protected ThemeExtensionList $themeExtensionList;

  /**
   * The name of the theme containing the icon files.
   *
   * @var string
   */
  protected string $theme = 'motional';

  /**
   * {@inheritdoc}
   */
  public function __construct($plugin_id, $plugin_definition, FieldDefinitionInterface $field_definition, array $settings, array $third_party_settings, ThemeExtensionList $theme_extension_list) {
    parent::__construct($plugin_id, $plugin_definition, $field_definition, $settings, $third_party_settings);
    $this->themeExtensionList = $theme_extension_list;
  }

  /**
   * {@inheritdoc}
   */
  public static function create(ContainerInterface $container, array $configuration, $plugin_id, $plugin_definition) {
    return new static(
      $plugin_id,
      $plugin_definition,
      $configuration['field_definition'],
      $configuration['settings'],
      $configuration['third_party_settings'],
      $container->get('extension.list.theme'));
  }

  /**
   * {@inheritdoc}
   */
  public function formElement(FieldItemListInterface $items, $delta, array $element, array &$form, FormStateInterface $form_state) {
    $element = parent::formElement($items, $delta, $element, $form, $form_state);

    $theme_path = '/' . $this->themeExtensionList->getPath($this->theme);
    $options = $this->getOptions($items->getEntity());
    foreach ($options as $key => $value) {
      $options[$key] = [
        'label' => $value,
        'image' => $theme_path . '/images/icons/' . $key . '.png',
      ];
    }

    $selected = $this->getSelectedOptions($items);

    // If required and there is one single option, preselect it.
    if ($this->required && count($options) == 1) {
      reset($options);
      $selected = [key($options)];
    }

    $element += [
      '#type' => 'image_radios',
      '#default_value' => $selected ? reset($selected) : NULL,
      '#options' => $options,
    ];

    return $element;
  }

  /**
   * Form validation handler for widget elements.
   *
   * @param array $element
   *   The form element.
   * @param \Drupal\Core\Form\FormStateInterface $form_state
   *   The form state.
   */
  public static function validateElement(array $element, FormStateInterface $form_state) {
    if ($element['#required'] && $element['#value'] == '_none') {
      $form_state->setError($element, t('@name field is required.', ['@name' => $element['#title']]));
    }

    $item = [
      'value' => $element['#value'],
    ];
    $form_state->setValueForElement($element, $item);
  }

}
