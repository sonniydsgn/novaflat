declare module 'astro:content' {
	interface Render {
		'.md': Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
	}
}

declare module 'astro:content' {
	type Flatten<T> = T extends { [K: string]: infer U } ? U : never;

	export type CollectionKey = keyof AnyEntryMap;
	export type CollectionEntry<C extends CollectionKey> = Flatten<AnyEntryMap[C]>;

	export type ContentCollectionKey = keyof ContentEntryMap;
	export type DataCollectionKey = keyof DataEntryMap;

	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidContentEntrySlug<C extends keyof ContentEntryMap> = AllValuesOf<
		ContentEntryMap[C]
	>['slug'];

	export function getEntryBySlug<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;

	export function getDataEntryById<C extends keyof DataEntryMap, E extends keyof DataEntryMap[C]>(
		collection: C,
		entryId: E
	): Promise<CollectionEntry<C>>;

	export function getCollection<C extends keyof AnyEntryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E
	): Promise<E[]>;
	export function getCollection<C extends keyof AnyEntryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown
	): Promise<CollectionEntry<C>[]>;

	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(entry: {
		collection: C;
		slug: E;
	}): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(entry: {
		collection: C;
		id: E;
	}): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		slug: E
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(
		collection: C,
		id: E
	): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;

	/** Resolve an array of entry references from the same collection */
	export function getEntries<C extends keyof ContentEntryMap>(
		entries: {
			collection: C;
			slug: ValidContentEntrySlug<C>;
		}[]
	): Promise<CollectionEntry<C>[]>;
	export function getEntries<C extends keyof DataEntryMap>(
		entries: {
			collection: C;
			id: keyof DataEntryMap[C];
		}[]
	): Promise<CollectionEntry<C>[]>;

	export function reference<C extends keyof AnyEntryMap>(
		collection: C
	): import('astro/zod').ZodEffects<
		import('astro/zod').ZodString,
		C extends keyof ContentEntryMap
			? {
					collection: C;
					slug: ValidContentEntrySlug<C>;
				}
			: {
					collection: C;
					id: keyof DataEntryMap[C];
				}
	>;
	// Allow generic `string` to avoid excessive type errors in the config
	// if `dev` is not running to update as you edit.
	// Invalid collection names will be caught at build time.
	export function reference<C extends string>(
		collection: C
	): import('astro/zod').ZodEffects<import('astro/zod').ZodString, never>;

	type ReturnTypeOrOriginal<T> = T extends (...args: any[]) => infer R ? R : T;
	type InferEntrySchema<C extends keyof AnyEntryMap> = import('astro/zod').infer<
		ReturnTypeOrOriginal<Required<ContentConfig['collections'][C]>['schema']>
	>;

	type ContentEntryMap = {
		"builders": {
"dogma.md": {
	id: "dogma.md";
  slug: "dogma";
  body: string;
  collection: "builders";
  data: InferEntrySchema<"builders">
} & { render(): Render[".md"] };
};
"mortgages": {
"family.md": {
	id: "family.md";
  slug: "family";
  body: string;
  collection: "mortgages";
  data: InferEntrySchema<"mortgages">
} & { render(): Render[".md"] };
};
"objects": {
"arhitector.md": {
	id: "arhitector.md";
  slug: "arhitector";
  body: string;
  collection: "objects";
  data: InferEntrySchema<"objects">
} & { render(): Render[".md"] };
"dogma-park.md": {
	id: "dogma-park.md";
  slug: "dogma-park";
  body: string;
  collection: "objects";
  data: InferEntrySchema<"objects">
} & { render(): Render[".md"] };
"dostoyanie.md": {
	id: "dostoyanie.md";
  slug: "dostoyanie";
  body: string;
  collection: "objects";
  data: InferEntrySchema<"objects">
} & { render(): Render[".md"] };
"gubernskiy.md": {
	id: "gubernskiy.md";
  slug: "gubernskiy";
  body: string;
  collection: "objects";
  data: InferEntrySchema<"objects">
} & { render(): Render[".md"] };
"lubimovo.md": {
	id: "lubimovo.md";
  slug: "lubimovo";
  body: string;
  collection: "objects";
  data: InferEntrySchema<"objects">
} & { render(): Render[".md"] };
"park-pobedy.md": {
	id: "park-pobedy.md";
  slug: "park-pobedy";
  body: string;
  collection: "objects";
  data: InferEntrySchema<"objects">
} & { render(): Render[".md"] };
"patriki.md": {
	id: "patriki.md";
  slug: "patriki";
  body: string;
  collection: "objects";
  data: InferEntrySchema<"objects">
} & { render(): Render[".md"] };
"rekord.md": {
	id: "rekord.md";
  slug: "rekord";
  body: string;
  collection: "objects";
  data: InferEntrySchema<"objects">
} & { render(): Render[".md"] };
"rodnye-prostory.md": {
	id: "rodnye-prostory.md";
  slug: "rodnye-prostory";
  body: string;
  collection: "objects";
  data: InferEntrySchema<"objects">
} & { render(): Render[".md"] };
"samolet.md": {
	id: "samolet.md";
  slug: "samolet";
  body: string;
  collection: "objects";
  data: InferEntrySchema<"objects">
} & { render(): Render[".md"] };
"skazka-grad.md": {
	id: "skazka-grad.md";
  slug: "skazka-grad";
  body: string;
  collection: "objects";
  data: InferEntrySchema<"objects">
} & { render(): Render[".md"] };
};

	};

	type DataEntryMap = {
		
	};

	type AnyEntryMap = ContentEntryMap & DataEntryMap;

	export type ContentConfig = typeof import("./../src/content/config.js");
}
