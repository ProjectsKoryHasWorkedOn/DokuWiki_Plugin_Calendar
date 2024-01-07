<?php
if(!defined('DOKU_INC')) die();

class action_plugin_ijsyouridea extends DokuWiki_Action_Plugin {
    function register(Doku_Event_Handler $controller) {
        $controller->register_hook('TPL_METAHEADER_OUTPUT', 'AFTER', $this, 'addScriptToHeader');
    }

    function addScriptToHeader(Doku_Event $event, $param) {
        $event->data['script'][] = array(
            'type'    => 'text/javascript',
            'charset' => 'utf-8',
            'src'     => DOKU_BASE . 'lib/plugins/ijsyouridea/front/script.js',
        );
        $event->data['script'][] = array(
            'type'    => 'text/javascript',
            'charset' => 'utf-8',
            'src'     => DOKU_BASE . 'lib/plugins/ijsyouridea/front/calendar/calendar.min.js',
        );
    }
}
