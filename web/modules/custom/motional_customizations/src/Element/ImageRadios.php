<?php

namespace Drupal\motional_customizations\Element;

use Drupal\Core\Render\Element\Radios;
use Drupal\Core\Form\FormStateInterface;
use Drupal\Core\Render\Element;

/**
 * Provides a layout selection element.
 *
 * Extends the radios form element and adds thumbnail previews for layouts.
 *
 * Usage example:
 * @code
 * $form['choose'] = [
 *   '#type' => 'image_radios',
 *   '#title' => t('Choose'),
 *   '#options' => [
 *     'option_1' => [
 *       'image' => 'path/to/image.png',
 *       'label' => 'Label',
 *     ],
 *     'option_2' => [
 *       'image' => 'path/to/image.png',
 *       'label' => 'Label 2',
 *     ],
 *   ],
 *   '#default_value' => 'layout1',
 * ];
 * @endcode
 *
 * @RenderElement("image_radios")
 */
class ImageRadios extends Radios {

  /**
   * {@inheritdoc}
   */
  public function getInfo() {
    $info = parent::getInfo();
    $info += [
      '#width' => 60,
      '#height' => 60,
      '#stroke_width' => 1,
      '#padding' => 0,
    ];
    $info['#process'][] = [__CLASS__, 'processImageRadios'];
    return $info;
  }

  /**
   * Add layout thumbnail previews.
   */
  public static function processImageRadios(&$element, FormStateInterface $form_state, &$complete_form) {
    foreach (Element::children($element) as $key) {
      if (isset($element[$key]['#title']['image'])) {
        $image = [
          '#theme' => 'image',
          '#uri' => $element[$key]['#title']['image'],
          '#alt' => $element[$key]['#title']['label'],
          '#title' => '',
        ];
        $title = \Drupal::service('renderer')->render($image);
      }
      else {
        $title = $element[$key]['#title']['label'];
      }
      $element[$key]['#title'] = $title;
      $element[$key]['#wrapper_attributes']['class'][] = 'image-radios__item';
    }
    $element['#attributes']['class'][] = 'image-radios-wrapper';
    $element['#attached']['library'][] = 'motional_customizations/image_radios';
    $element['#wrapper_attributes'] = ['class' => ['image-radios']];
    return $element;
  }

}
