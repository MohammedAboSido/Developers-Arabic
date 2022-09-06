const mobileToggle = document.getElementById( "mobile-toggle" );
mobileToggle.addEventListener( 'click', () =>
{
    document.querySelector( ".nav-items" ).classList.toggle( "active" );
} );


const nvaLinks = document.querySelectorAll( ".nav-item" ).forEach( ( navItem ) =>
{
    navItem.addEventListener( 'click', () =>
    {
        document.querySelector( ".nav-items" ).classList.toggle( "active" );
    } );
} );