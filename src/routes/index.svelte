<script>
import _ from 'lodash';
import all from './content/*.md'
import Header from '../components/Header.svelte';

export const mapped = 
_.mapValues(all, (file) => {
	return file.html;
});
</script>
<style>
	#content {
		overflow-y: scroll;
		position: absolute; 
		top: 0; 
		left: 1%; 
		right: 0; 
		bottom: 0;
	}
	#about {
		padding-top: 5%;
	}
</style>

<svelte:head>
	<title>Johnny Richardson</title>
</svelte:head>

<Header />

<section id="content">

	<div id="about" class="frow row-start">
		<div class="col-md-1-3">
			<h3>About</h3>
			
			{@html mapped['0']}
		</div>
	</div>

	<div class="frow row-start">
		<div class="col-md-1-2">
			<h3>Highlights</h3>
			<div id="highlights">
				{@html mapped['1']}
			</div>
		</div>
	</div>

</section>