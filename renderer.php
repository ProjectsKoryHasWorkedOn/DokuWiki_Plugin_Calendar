<?php

/**
 * DokuWiki Plugin ijsyouridea (Renderer Component)
 *
 * @license GPL 2 http://www.gnu.org/licenses/gpl-2.0.html
 * @author valerii <zinchenkomac@icloud.com>
 */
class renderer_plugin_ijsyouridea extends Doku_Renderer_xhtml
{
    /**
     * @inheritDoc
     * Make available as XHTML replacement renderer
     */
    public function canRender($format)
    {
        if ($format == 'xhtml') {
            return true;
        }
        return false;
    }

    // FIXME override any methods of Doku_Renderer_xhtml here
}
