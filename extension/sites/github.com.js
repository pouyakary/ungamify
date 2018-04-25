
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
        '#js-pjax-container > div > div.columns > div.column.three-fourths.codesearch-results > div > ul > div > div.col-2.text-right.pt-1.pr-3.pt-2',
        '.filter-list',
        '.profile-timeline-year-list',
        '#js-contribution-activity',
        "#js-pjax-container > div > div.col-9.float-left.pl-2 > div.position-relative > div.mt-4 > h2"
    ]

//
// ─── REMOVERS ───────────────────────────────────────────────────────────────────
//

    function cleanerProcedure ( ) {
        const grandQuery =
            queries.join(', ')
        for ( const element of document.querySelectorAll( grandQuery ) )
            element.remove( )
    }

    setTimeout( cleanerProcedure )
    setInterval( cleanerProcedure, 1000 )

// ────────────────────────────────────────────────────────────────────────────────
