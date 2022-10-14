<?php

namespace Drupal\motional_customizations\Plugin\Field\FieldFormatter;

use Drupal\Core\Extension\ThemeExtensionList;
use Drupal\Core\Field\FieldDefinitionInterface;
use Drupal\Core\Field\FormatterBase;
use Drupal\Core\Field\FieldItemListInterface;
use Symfony\Component\DependencyInjection\ContainerInterface;

/**
 * Plugin implementation of the 'options_icon' formatter.
 *
 * @FieldFormatter(
 *   id = "options_icon",
 *   label = @Translation("Options Icon"),
 *   field_types = {
 *     "list_string"
 *   }
 * )
 */
class OptionsIconsFormatter extends FormatterBase {

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
  public function __construct($plugin_id, $plugin_definition, FieldDefinitionInterface $field_definition, array $settings, $label, $view_mode, array $third_party_settings, ThemeExtensionList $theme_extension_list) {
    parent::__construct($plugin_id, $plugin_definition, $field_definition, $settings, $label, $view_mode, $third_party_settings);
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
      $configuration['label'],
      $configuration['view_mode'],
      $configuration['third_party_settings'],
      $container->get('extension.list.theme'));
  }

  /**
   * {@inheritdoc}
   */
  public function settingsSummary() {
    $summary = [];
    $summary[] = $this->t('Displays the selected icon.');
    return $summary;
  }

  /**
   * {@inheritdoc}
   */
  public function viewElements(FieldItemListInterface $items, $langcode) {
    $element = [];
    $theme_path = '/' . $this->themeExtensionList->getPath($this->theme);

    foreach ($items as $delta => $item) {
      $options = $item->getPossibleOptions();
      $element[$delta] = [
        '#theme' => 'image',
        '#uri' => $theme_path . '/images/icons/' . $item->value . '.png',
        '#alt' => $options[$item->value],
        '#title' => '',
      ];
    }

    return $element;
  }

}
