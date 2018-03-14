

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
        '.ytp-endscreen-content'
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
// ─── REMOVE HOMEPAGE RECOMMENDATIONS ────────────────────────────────────────────
//

    function removeHomePageSuggestions ( ) {
        const title =
            document.getElementById( 'title' )

        if ( title !== null && title.innerHTML === "Recommended" )
            document.querySelector( "ytd-browse" ).hidden = true
    }

//
// ─── MAIN ───────────────────────────────────────────────────────────────────────
//

    function intervalBody ( ) {
        gamifyRemoverFunction( );
        removeHomePageSuggestions( );
    }

    window.onload = ( ) =>
        setInterval( intervalBody, 1000 )

// ────────────────────────────────────────────────────────────────────────────────
