<div class="hero space">
	<div class="title">
		<h1 class="serif capitalize">
			Discover and share inspiring quotes
		</h1>
	</div>

	<div class="quote">
		<article>
			<p class="serif">“What, You Egg!” — Shakespeare</p>

			<footer>
				<a href="/quotes">Discover more quotes →</a>
			</footer>
		</article>
	</div>
</div>

<style>
	.hero {
		position: relative;
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		grid-template-rows: repeat(4, 140px);

		/* creates new stacking context for z-index */
		isolation: isolate;
	}

	.hero::after {
		content: '';
		grid-row: 1 / -1;
		grid-column: 3 / -1;
		background-image: url('cover.jpg');
		background-size: cover;
		border: 10px solid;
		border-image-slice: 1;
		border-image-source: linear-gradient(
			to left,
			orange,
			orangered
		);
		z-index: -10;
	}

	.title {
		height: 100%;
		grid-column: 1 / 4;
		grid-row: 1 / 3;
		display: grid;
		place-content: center;
	}

	.quote {
		grid-column: 1 / 4;
		grid-row: 3;
		padding: 1rem;
	}

	article {
		margin: 0;
	}
</style>
