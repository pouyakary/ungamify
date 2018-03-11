

//
// ─── QUERIES ────────────────────────────────────────────────────────────────────
//

    const queries = [
        '#related',
        '#comments',
        '.img_ad',
        'yt-formatted-string#text.style-scope.ytd-toggle-button-renderer',
        '#count',
        '#subscribe-button > ytd-subscribe-button-renderer > paper-button > yt-formatted-string > span',
        '#subscriber-count',
        '#metadata-line',
    ]

//
// ─── REMOVERS ───────────────────────────────────────────────────────────────────
//

    function gamifyRemoverFunction ( ) {
        for ( const query of queries )
            for ( const element of document.querySelectorAll( query ) )
                element.hidden = true
    }

//
// ─── MAIN ───────────────────────────────────────────────────────────────────────
//

    window.onload = ( ) =>
        setInterval( gamifyRemoverFunction, 1000 )

// ────────────────────────────────────────────────────────────────────────────────
