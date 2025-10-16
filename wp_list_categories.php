<?php
wp_list_categories(array(
    'title_li' => '',
    'show_option_none' => 'No categories',
    'current_category' => get_queried_object_id()
));
?>
