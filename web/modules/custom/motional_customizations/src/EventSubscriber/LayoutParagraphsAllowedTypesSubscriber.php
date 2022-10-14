<?php

namespace Drupal\motional_customizations\EventSubscriber;

use Drupal\layout_paragraphs\Event\LayoutParagraphsAllowedTypesEvent;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;

/**
 * Class EntityTypeSubscriber.
 *
 * @package Drupal\custom_events\EventSubscriber
 */
class LayoutParagraphsAllowedTypesSubscriber implements EventSubscriberInterface {

  /**
   * {@inheritdoc}
   *
   * @return array
   *   The event names to listen for, and the methods that should be executed.
   */
  public static function getSubscribedEvents() {
    return [
      LayoutParagraphsAllowedTypesEvent::EVENT_NAME => 'allowedTypes',
    ];
  }

  /**
   * React to a layout paragraphs allowed type event.
   *
   * @param \Drupal\layout_paragraphs\Event\LayoutParagraphsAllowedTypesEvent $event
   *   Layout paragraphs allowed type event.
   */
  public function allowedTypes(LayoutParagraphsAllowedTypesEvent $event) {
    $types = $event->getTypes();
    if (array_key_exists('carousel', $types)) {
      $types['testimonial'] = $types['carousel'];
      $types['testimonial']['label'] = 'Testimonial';
      $types['testimonial']['query_params'] = [
        'field_carousel_type' => 'testimonial',
      ];
    }
    ksort($types);
    $event->setTypes($types);
  }

}
