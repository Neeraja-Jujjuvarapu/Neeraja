define("UsrDecimalOutputPage", [], function() {
	return {
		entitySchemaName: "",
		attributes: {},
		modules: /**SCHEMA_MODULES*/{}/**SCHEMA_MODULES*/,
		details: /**SCHEMA_DETAILS*/{}/**SCHEMA_DETAILS*/,
		businessRules: /**SCHEMA_BUSINESS_RULES*/{}/**SCHEMA_BUSINESS_RULES*/,
		methods: {},
		dataModels: /**SCHEMA_DATA_MODELS*/{}/**SCHEMA_DATA_MODELS*/,
		diff: /**SCHEMA_DIFF*/[
			{
				"operation": "insert",
				"name": "FLOAT5c6e3b22-cf14-42d5-8cdb-d2a11fac2496",
				"values": {
					"layout": {
						"colSpan": 10,
						"rowSpan": 1,
						"column": 5,
						"row": 0,
						"layoutName": "Header"
					},
					"bindTo": "UsrFloat1",
					"enabled": false
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "merge",
				"name": "NewTab1",
				"values": {
					"order": 0
				}
			},
			{
				"operation": "insert",
				"name": "STRING35354755-6026-4abe-8202-abf0341bfd7e",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 2,
						"column": 0,
						"row": 0,
						"layoutName": "NewTab1GridLayout1"
					},
					"bindTo": "UsrString1",
					"enabled": false,
					"contentType": 0
				},
				"parentName": "NewTab1GridLayout1",
				"propertyName": "items",
				"index": 0
			}
		]/**SCHEMA_DIFF*/
	};
});
