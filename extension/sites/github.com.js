
//
// ─── QUERIES ────────────────────────────────────────────────────────────────────
//

    const queries = [
        '.js-contribution-graph',
        '.Counter',
        '.mb-0 > a',
        '.mt-2 > a',
        '.social-count',
        'p.f6.text-gray.mt-2.mb-0 > span.d-inline-block.mr-3',
        '.stars',
        'div.d-flex.flex-justify-between.flex-items-start.mb-1 > a',
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
            console.log("Error while removing selector '" + query + "': ", e )
        }
    }

// ────────────────────────────────────────────────────────────────────────────────
