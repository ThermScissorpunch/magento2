import gql from 'graphql-tag';

export const query = gql`
    query categoryList($filters: CategoryFilterInput) {
        categoryList(filters: $filters) {
            id,
            name,
            url_path,
            meta_title,
            meta_description,
            breadcrumbs {
                category_name,
                category_url_path
            },
            display_mode,
            description,
            available_sort_by,
            default_sort_by,
            product_count,
            cms_block{
                content,
                title
            },
            children {
                id,
                name,
                url_path
            }
        }
    }
`;
