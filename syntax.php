<?php
class syntax_plugin_ijsyouridea extends DokuWiki_Syntax_Plugin {
    function getType() {
        return 'container';
    }

    function getPType() {
        return 'block';
    }

    function getSort() {
        return 158;
    }

    function connectTo($mode) {
        $this->Lexer->addEntryPattern('<calendar.*?>(?=.*?</calendar>)', $mode, 'plugin_ijsyouridea');
    }

    function postConnect() {
        $this->Lexer->addExitPattern('</calendar>', 'plugin_ijsyouridea');
    }

    function handle($match, $state, $pos, Doku_Handler $handler) {
        // Handle parameters if needed
        return array();
    }

    function render($mode, Doku_Renderer $renderer, $data) {
        if ($mode == 'xhtml') {
            $renderer->doc .= '<div id="calendar"></div>';
            $renderer->meta['script'][] = array(
            'type'    => 'text/javascript',
            'charset' => 'utf-8',
            'src'     => DOKU_BASE . 'lib/plugins/ijsyouridea/front/script.js',
        );
            $renderer->meta['script'][] = array(
            'type'    => 'text/javascript',
            'charset' => 'utf-8',
            'src'     => DOKU_BASE . 'lib/plugins/ijsyouridea/front/calendar/calendar.min.js',
        );
            return true;
        }
        return false;
    }
}
