
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

    for ( const query of queries )
        for ( const element of document.querySelectorAll( query ) )
            element.remove( )

// ────────────────────────────────────────────────────────────────────────────────
