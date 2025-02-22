import gql from 'graphql-tag';

export default gql`
    query storeConfig {
        storeConfig {
            absolute_footer,
            base_currency_code,
            catalog_default_sort_by,
            category_url_suffix,
            cms_home_page,
            cms_no_cookies,
            no_route
            id
            code,
            website_id
            copyright,
            default_title,
            title_prefix,
            title_separator,
            title_suffix,
            default_description,
            default_keywords,
            default_display_currency_code,
            grid_per_page,
            grid_per_page_values,
            list_per_page,
            list_per_page_values
            head_shortcut_icon,
            header_logo_src,
            locale,
            logo_alt,
            logo_height,
            logo_width,
            product_url_suffix,
            root_category_id,
            show_cms_breadcrumbs,
            store_name,
            timezone,
            welcome
        }
    }
`;
