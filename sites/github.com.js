
//
// ─── QUERIES ────────────────────────────────────────────────────────────────────
//

    const queries = [
        '.js-contribution-graph',
        '.Counter',
        '.mb-0 > a',
        '.mt-2 > a',
    ]

//
// ─── REMOVERS ───────────────────────────────────────────────────────────────────
//

    for ( const query of queries ) {
        try {
            const elements =
                document.querySelectorAll( query )

            elements.forEach( x => x.remove( ) )

        } catch ( e ) {
            // who cares?
        }
    }

// ────────────────────────────────────────────────────────────────────────────────
