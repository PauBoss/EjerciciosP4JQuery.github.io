/**
* He creado una función que se encargará de dar el formato necesario a cada elemento.
**/
$( function ( ) {
	//$( "p" )
	//.after( "<a href=#>Back to the top</a>" );

	//$( "<a href=#>Back to the top</a>" )
	//.prependTo( "p" );
	
	// Para repetir el encale de otra forma.
	$( "<a href=#>Back to the top</a>" )
	.insertAfter( "p" );
	
	// Elementos del pie
	$( ".footnote" )
	.appendTo( $( "#footer" ) );

	$( "#final" )
	.before( $( ".footnote" ) );

	$( "#footer" )
	.after( $( "#final" ) );
	
	// La lista.
	$( '#footer > span' )
	.each( function ( ) {
		$( this )
		.prepend(
			( $( this )
				.index( ) + 1 ) + ". " );
	} );

} );
