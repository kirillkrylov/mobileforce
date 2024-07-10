define("Opportunities_FormPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "remove",
				"name": "ContactRolesSearchFilter",
				"properties": [
					"targetAttributes"
				]
			},
			{
				"operation": "merge",
				"name": "ContactRolesSearchFilter",
				"values": {
					"_filterOptions": {
						"expose": [
							{
								"attribute": "ContactRolesSearchFilter_ContactRolesList",
								"converters": [
									{
										"converter": "crt.SearchFilterAttributeConverter",
										"args": [
											"ContactRolesList"
										]
									}
								]
							}
						],
						"from": [
							"ContactRolesSearchFilter_SearchValue",
							"ContactRolesSearchFilter_FilteredColumnsGroups"
						]
					}
				}
			},
			{
				"operation": "remove",
				"name": "OpportunityTeamSearchFilter",
				"properties": [
					"targetAttributes"
				]
			},
			{
				"operation": "merge",
				"name": "OpportunityTeamSearchFilter",
				"values": {
					"_filterOptions": {
						"expose": [
							{
								"attribute": "OpportunityTeamSearchFilter_OpportunityTeamList",
								"converters": [
									{
										"converter": "crt.SearchFilterAttributeConverter",
										"args": [
											"OpportunityTeamList"
										]
									}
								]
							}
						],
						"from": [
							"OpportunityTeamSearchFilter_SearchValue",
							"OpportunityTeamSearchFilter_FilteredColumnsGroups"
						]
					}
				}
			},
			{
				"operation": "remove",
				"name": "CompetitorsSearchFilter",
				"properties": [
					"targetAttributes"
				]
			},
			{
				"operation": "merge",
				"name": "CompetitorsSearchFilter",
				"values": {
					"_filterOptions": {
						"expose": [
							{
								"attribute": "CompetitorsSearchFilter_CompetitorsList",
								"converters": [
									{
										"converter": "crt.SearchFilterAttributeConverter",
										"args": [
											"CompetitorsList"
										]
									}
								]
							}
						],
						"from": [
							"CompetitorsSearchFilter_SearchValue",
							"CompetitorsSearchFilter_FilteredColumnsGroups"
						]
					}
				}
			},
			{
				"operation": "merge",
				"name": "TimelineFilter_Entity",
				"values": {
					"type": "TimelineFilter_Entity"
				}
			},
			{
				"operation": "merge",
				"name": "TimelineFilter_Date",
				"values": {
					"type": "TimelineFilter_Date"
				}
			},
			{
				"operation": "merge",
				"name": "TimelineFilter_Owner",
				"values": {
					"type": "TimelineFilter_Owner"
				}
			},
			{
				"operation": "merge",
				"name": "TimelineFilter_SystemMessages",
				"values": {
					"type": "TimelineFilter_SystemMessages"
				}
			},
			{
				"operation": "remove",
				"name": "ProductsSearchFilter",
				"properties": [
					"targetAttributes"
				]
			},
			{
				"operation": "merge",
				"name": "ProductsSearchFilter",
				"values": {
					"_filterOptions": {
						"expose": [
							{
								"attribute": "ProductsSearchFilter_ProductsList",
								"converters": [
									{
										"converter": "crt.SearchFilterAttributeConverter",
										"args": [
											"ProductsList"
										]
									}
								]
							}
						],
						"from": [
							"ProductsSearchFilter_SearchValue",
							"ProductsSearchFilter_FilteredColumnsGroups"
						]
					}
				}
			},
			{
				"operation": "remove",
				"name": "RecommendedProductSearchFilter",
				"properties": [
					"targetAttributes"
				]
			},
			{
				"operation": "merge",
				"name": "RecommendedProductSearchFilter",
				"values": {
					"_filterOptions": {
						"expose": [
							{
								"attribute": "RecommendedProductSearchFilter_RecommendedProductList",
								"converters": [
									{
										"converter": "crt.SearchFilterAttributeConverter",
										"args": [
											"RecommendedProductList"
										]
									}
								]
							}
						],
						"from": [
							"RecommendedProductSearchFilter_SearchValue",
							"RecommendedProductSearchFilter_FilteredColumnsGroups"
						]
					}
				}
			},
			{
				"operation": "remove",
				"name": "StageHistorySearchFilter",
				"properties": [
					"targetAttributes"
				]
			},
			{
				"operation": "merge",
				"name": "StageHistorySearchFilter",
				"values": {
					"_filterOptions": {
						"expose": [
							{
								"attribute": "StageHistorySearchFilter_GridDetail_rnogu7n",
								"converters": [
									{
										"converter": "crt.SearchFilterAttributeConverter",
										"args": [
											"GridDetail_rnogu7n"
										]
									}
								]
							}
						],
						"from": [
							"StageHistorySearchFilter_SearchValue",
							"StageHistorySearchFilter_FilteredColumnsGroups"
						]
					}
				}
			},
			{
				"operation": "remove",
				"name": "LeadsSearchFilter",
				"properties": [
					"targetAttributes"
				]
			},
			{
				"operation": "merge",
				"name": "LeadsSearchFilter",
				"values": {
					"_filterOptions": {
						"expose": [
							{
								"attribute": "LeadsSearchFilter_GridDetail_n4l8edn",
								"converters": [
									{
										"converter": "crt.SearchFilterAttributeConverter",
										"args": [
											"GridDetail_n4l8edn"
										]
									}
								]
							}
						],
						"from": [
							"LeadsSearchFilter_SearchValue",
							"LeadsSearchFilter_FilteredColumnsGroups"
						]
					}
				}
			},
			{
				"operation": "remove",
				"name": "OpportunitiesByCustomerSearchFilter",
				"properties": [
					"targetAttributes"
				]
			},
			{
				"operation": "merge",
				"name": "OpportunitiesByCustomerSearchFilter",
				"values": {
					"_filterOptions": {
						"expose": [
							{
								"attribute": "OpportunitiesByCustomerSearchFilter_GridDetail_iwda2md",
								"converters": [
									{
										"converter": "crt.SearchFilterAttributeConverter",
										"args": [
											"GridDetail_iwda2md"
										]
									}
								]
							}
						],
						"from": [
							"OpportunitiesByCustomerSearchFilter_SearchValue",
							"OpportunitiesByCustomerSearchFilter_FilteredColumnsGroups"
						]
					}
				}
			},
			{
				"operation": "insert",
				"name": "TabContainer_CPQ",
				"values": {
					"type": "crt.TabContainer",
					"items": [],
					"caption": "#ResourceString(TabContainer_y8frsaa_caption)#",
					"iconPosition": "only-text",
					"visible": true
				},
				"parentName": "Tabs",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridContainer_893n2nk",
				"values": {
					"type": "crt.GridContainer",
					"items": [],
					"rows": "minmax(32px, max-content)",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": "none"
					},
					"visible": true,
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "none",
						"left": "none"
					},
					"alignItems": "stretch"
				},
				"parentName": "TabContainer_CPQ",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridContainer_iframe",
				"values": {
					"type": "crt.GridContainer",
					"columns": [
						"minmax(32px, 1fr)"
					],
					"rows": "minmax(max-content, 32px)",
					"gap": {
						"columnGap": "large",
						"rowGap": "none"
					},
					"items": [],
					"fitContent": true,
					"visible": true,
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "none",
						"left": "none"
					},
					"alignItems": "stretch"
				},
				"parentName": "TabContainer_CPQ",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "mfsIframe",
				"values": {
					"type": "mfs.Iframe",
					"iframesrc": "https://apps.mobileforcesoftware.com/adlwebui/",
					"title": "Mobileforce CPQ",
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					}
				},
				"parentName": "GridContainer_iframe",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "TimelineTile_Document_lopz2gn",
				"values": {
					"type": "crt.TimelineTile",
					"classes": [
						"view-element"
					],
					"linkedColumn": "Opportunity",
					"sortedByColumn": "CreatedOn",
					"ownerColumn": "CreatedBy",
					"iconId": null,
					"data": {
						"columns": [
							{
								"columnName": "CreatedOn",
								"columnLayout": null
							},
							{
								"columnName": "Number",
								"columnLayout": null
							},
							{
								"columnName": "Type",
								"columnLayout": "{\"column\": 1,\"row\": 1,\"colSpan\": 3,\"rowSpan\": 1}"
							},
							{
								"columnName": "State",
								"columnLayout": "{\"column\": 4,\"row\": 1,\"colSpan\": 3,\"rowSpan\": 1}"
							}
						],
						"schemaName": "Document",
						"schemaType": null,
						"isDefault": true
					}
				},
				"parentName": "Timeline",
				"propertyName": "items",
				"index": 6
			},
			{
				"operation": "insert",
				"name": "TimelineTile_Invoice_u6x9p12",
				"values": {
					"type": "crt.TimelineTile",
					"classes": [
						"view-element"
					],
					"linkedColumn": "Opportunity",
					"sortedByColumn": "CreatedOn",
					"ownerColumn": "CreatedBy",
					"iconId": null,
					"data": {
						"columns": [
							{
								"columnName": "CreatedOn",
								"columnLayout": null
							},
							{
								"columnName": "Number",
								"columnLayout": null
							},
							{
								"columnName": "Account",
								"columnLayout": "{\"column\": 1,\"row\": 1,\"colSpan\": 3,\"rowSpan\": 1}"
							},
							{
								"columnName": "Contact",
								"columnLayout": "{\"column\": 4,\"row\": 1,\"colSpan\": 3,\"rowSpan\": 1}"
							},
							{
								"columnName": "PaymentStatus",
								"columnLayout": "{\"column\": 7,\"row\": 1,\"colSpan\": 3,\"rowSpan\": 1}"
							},
							{
								"columnName": "Amount",
								"columnLayout": "{\"column\": 1,\"row\": 2,\"colSpan\": 3,\"rowSpan\": 1}"
							},
							{
								"columnName": "DueDate",
								"columnLayout": "{\"column\": 4,\"row\": 2,\"colSpan\": 3,\"rowSpan\": 1}"
							}
						],
						"schemaName": "Invoice",
						"schemaType": null,
						"isDefault": true
					}
				},
				"parentName": "Timeline",
				"propertyName": "items",
				"index": 7
			},
			{
				"operation": "insert",
				"name": "TimelineTile_Order_yasyoat",
				"values": {
					"type": "crt.TimelineTile",
					"classes": [
						"view-element"
					],
					"linkedColumn": "Opportunity",
					"sortedByColumn": "CreatedOn",
					"ownerColumn": "CreatedBy",
					"iconId": null,
					"data": {
						"columns": [
							{
								"columnName": "CreatedOn",
								"columnLayout": null
							},
							{
								"columnName": "Number",
								"columnLayout": null
							},
							{
								"columnName": "Account",
								"columnLayout": "{\"column\": 1,\"row\": 1,\"colSpan\": 3,\"rowSpan\": 1}"
							},
							{
								"columnName": "Contact",
								"columnLayout": "{\"column\": 4,\"row\": 1,\"colSpan\": 3,\"rowSpan\": 1}"
							},
							{
								"columnName": "Status",
								"columnLayout": "{\"column\": 1,\"row\": 2,\"colSpan\": 3,\"rowSpan\": 1}"
							},
							{
								"columnName": "Amount",
								"columnLayout": "{\"column\": 4,\"row\": 2,\"colSpan\": 3,\"rowSpan\": 1}"
							}
						],
						"schemaName": "Order",
						"schemaType": null,
						"isDefault": true
					}
				},
				"parentName": "Timeline",
				"propertyName": "items",
				"index": 8
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes",
					"ProductsList",
					"modelConfig"
				],
				"values": {
					"filterAttributes": [
						{
							"name": "ProductsSearchFilter_ProductsList",
							"loadOnChange": true
						}
					]
				}
			},
			{
				"operation": "merge",
				"path": [
					"attributes",
					"RecommendedProductList",
					"modelConfig"
				],
				"values": {
					"filterAttributes": [
						{
							"name": "RecommendedProductSearchFilter_RecommendedProductList",
							"loadOnChange": true
						}
					]
				}
			},
			{
				"operation": "merge",
				"path": [
					"attributes",
					"ContactRolesList",
					"modelConfig"
				],
				"values": {
					"filterAttributes": [
						{
							"name": "ContactRolesSearchFilter_ContactRolesList",
							"loadOnChange": true
						}
					]
				}
			},
			{
				"operation": "merge",
				"path": [
					"attributes",
					"OpportunityTeamList",
					"modelConfig"
				],
				"values": {
					"filterAttributes": [
						{
							"name": "OpportunityTeamSearchFilter_OpportunityTeamList",
							"loadOnChange": true
						}
					]
				}
			},
			{
				"operation": "merge",
				"path": [
					"attributes",
					"CompetitorsList",
					"modelConfig"
				],
				"values": {
					"filterAttributes": [
						{
							"name": "CompetitorsSearchFilter_CompetitorsList",
							"loadOnChange": true
						}
					]
				}
			},
			{
				"operation": "merge",
				"path": [
					"attributes",
					"GridDetail_rnogu7n",
					"modelConfig"
				],
				"values": {
					"filterAttributes": [
						{
							"name": "StageHistorySearchFilter_GridDetail_rnogu7n",
							"loadOnChange": true
						}
					]
				}
			},
			{
				"operation": "merge",
				"path": [
					"attributes",
					"GridDetail_n4l8edn",
					"modelConfig"
				],
				"values": {
					"filterAttributes": [
						{
							"name": "QuickFilterShowAllLeads_GridDetail_n4l8edn",
							"loadOnChange": true
						},
						{
							"name": "LeadsSearchFilter_GridDetail_n4l8edn",
							"loadOnChange": true
						}
					]
				}
			},
			{
				"operation": "merge",
				"path": [
					"attributes",
					"GridDetail_iwda2md",
					"modelConfig"
				],
				"values": {
					"filterAttributes": [
						{
							"name": "OpportunitiesByCustomerSearchFilter_GridDetail_iwda2md",
							"loadOnChange": true
						}
					]
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});