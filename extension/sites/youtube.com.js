

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
        '.ytp-endscreen-content',
        '#endpoint[title*="Home"]',
        '#endpoint[title*="Trending"]',
    ]

//
// ─── REMOVERS ───────────────────────────────────────────────────────────────────
//

    function gamifyRemoverFunction ( ) {
        const grandQuery =
            queries.join( ', ' )
        for ( const element of document.querySelectorAll( grandQuery ) )
            element.remove( )
    }

//
// ─── REMOVE HOMEPAGE RECOMMENDATIONS ────────────────────────────────────────────
//

    function removeHomePageSuggestions ( ) {
        const title =
            document.getElementById( 'title' )

        if ( title !== null && title.innerHTML === "Recommended" )
            document.querySelector( "ytd-browse" ).innerHTML = (`
                <div style = "padding: 100pt; font-size: 50pt;">
                    🦅 🦖 🦆 <br>
                    🦔 🦑 🐉 <br>
                    🐌 🐊 🐬
                </div>
            `)
    }

//
// ─── MAIN ───────────────────────────────────────────────────────────────────────
//

    function intervalBody ( ) {
        removeHomePageSuggestions( );
        gamifyRemoverFunction( );
    }

    window.onload = ( ) =>
        setInterval( intervalBody, 1000 )

// ────────────────────────────────────────────────────────────────────────────────
