$( function ( ) {
	//$( "p" )
	//.after( "<a href=#>Back to the top</a>" );

	//$( "<a href=#>Back to the top</a>" )
	//.prependTo( "p" );

	$( "<a href=#>Back to the top</a>" )
	.insertAfter( "p" );

	$( ".footnote" )
	.appendTo( $( "#footer" ) );

	$( "#final" )
	.before( $( ".footnote" ) );

	$( "#footer" )
	.after( $( "#final" ) );

	$( '#footer > span' )
	.each( function ( ) {
		$( this )
		.prepend(
			( $( this )
				.index( ) + 1 ) + ". " );
	} );

} );
