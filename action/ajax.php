<?php

/**
 * DokuWiki DAVCal PlugIn - Ajax component
 */

class action_plugin_ijsyouridea_ajax extends DokuWiki_Action_Plugin {
  private $hlp = null;
  $data = array();
  function __construct() {
    //here we populate the $hlp variable with the helper class
        $this->hlp =& plugin_load('helper','ijsyouridea');
    }
    function register(Doku_Event_Handler $controller) {
        $controller->register_hook('AJAX_CALL_UNKNOWN', 'BEFORE', $this, 'handle_ajax_call_unknown');
    }

    function handle_ajax_call_unknown(&$event, $param) {
      $event->preventDefault();
      $event->stopPropagation();
      global $INPUT;
      switch($action)
      {
        default:
        //using getSomething() from helper.php
        $data['result'] = true;
        $data['html'] = $this->hlp->getSomething();
      }

    }

}
?>