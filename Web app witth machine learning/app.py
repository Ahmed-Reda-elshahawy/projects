import streamlit as st
from predict_page import show_predict_page
from explore_page import show_explore_page

page = st.sidebar.selectbox('Explore or Predict', ('Predict', 'Explore')) #sidebar to move any widget to the sidebar

if page == 'Predict':
    show_predict_page()
else:
    show_explore_page()

