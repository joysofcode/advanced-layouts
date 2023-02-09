<script lang="ts">
	import { enhance } from '$app/forms'
</script>

<h3 class="serif capitalize">Add quote</h3>

<form method="POST" use:enhance>
	<label for="author">
		Author
		<input type="text" name="author" id="author" required />
	</label>

	<label for="source">
		Source
		<input type="text" name="source" id="source" required />
	</label>

	<label for="tags">
		Tags
		<input type="text" name="tags" id="tags" />
	</label>

	<label for="text">
		Quote
		<textarea name="text" id="text" rows="4" required />
	</label>

	<button class="capitalize" type="submit">
		+ Add quote
	</button>
</form>

<style>
	form {
		max-width: 480px;
	}
</style>
