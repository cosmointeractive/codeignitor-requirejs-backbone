
<div class="content">
	<p>
		Display my content passed from the controller
	</p>

	<?php if ( isset($foo) ) : ?>
		<div class="data">Our data: <b>foo === <?php echo $foo; ?></b></div>
	<?php endif; ?>

</div>