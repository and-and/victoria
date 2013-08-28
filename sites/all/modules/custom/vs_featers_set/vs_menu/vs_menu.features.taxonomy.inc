<?php
/**
 * @file
 * vs_menu.features.taxonomy.inc
 */

/**
 * Implements hook_taxonomy_default_vocabularies().
 */
function vs_menu_taxonomy_default_vocabularies() {
  return array(
    'categories_request' => array(
      'name' => 'Категории под заказ',
      'machine_name' => 'categories_request',
      'description' => 'Категории раздела под заказ',
      'hierarchy' => '1',
      'module' => 'taxonomy',
      'weight' => '0',
      'rdf_mapping' => array(
        'rdftype' => array(
          0 => 'skos:ConceptScheme',
        ),
        'name' => array(
          'predicates' => array(
            0 => 'dc:title',
          ),
        ),
        'description' => array(
          'predicates' => array(
            0 => 'rdfs:comment',
          ),
        ),
      ),
    ),
  );
}
