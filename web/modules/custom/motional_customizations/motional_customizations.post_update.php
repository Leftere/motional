<?php

/**
 * @file
 * Contains motional_customizations.post_update.php.
 */

use Drupal\field_type_converter\FieldTypeConverter;

/**
 * Implements hook_post_update_NAME().
 */
function motional_customizations_post_update_9001(&$sandbox) {
  $moduleHandler = \Drupal::service('module_handler');
  if (!$moduleHandler->moduleExists('field_type_converter')) {
    \Drupal::service('module_installer')->install(['field_type_converter'], TRUE);
  }

  $field_map['paragraph'] = [
    'field_homepage_hero_title' => 'text',
  ];
  return FieldTypeConverter::processBatch($sandbox, $field_map);
}
