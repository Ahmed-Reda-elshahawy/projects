import streamlit as st
import pickle
import numpy as np


def load_model():
    with open('saved_steps.pkl', 'rb') as file:
        data = pickle.load(file)
    return data

data = load_model()
regressor = data['model']
le_country = data['le_country']
le_education = data['le_education']

def show_predict_page():
    st.title('Software Developer Salary Prediction')

    st.write('''### We need some information to predict the salary''')#we make '''''' like comment to write text, ### means h3 in html

    countries = (
        'United States',
        'India',
        'United Kingdom',
        'Germany',
        'Canada',
        'Brazil',
        'France',
        'Spain',
        'Australia',
        'Netherlands'
        'Poland',
        'Italy',
        'Russian Federation',
        'Sweden'
    )

    education = (
        'Less than a Bachelors',
        'Bachelor’s degree',
        'Master’s degree',
        'Post grad'
    ) 

    country = st.selectbox('Country', countries)#the first argument is the name, and the second argument is the choices in the select box
    #the value of the country variable will be what the user will select from the selectbox
    education = st.selectbox('Education Level', education)

    experience = st.slider('Years of Experience', 0, 50, 3) #this is like a range and we choose from this range
    #the first argument is the name, the second is the start value, the third is the end value
    #the fourth is the default number that the slider will be at
    #and like above the number that we will choose will be stored in the experience variable

    ok = st.button('Calculate Salary') #if we click on the button than the value of the variable ok will be True and if not it will be False
    if ok:
        X = np.array([[country, education, experience]])
        X[:, 0] = le_country.transform(X[:, 0])
        X[:, 1] = le_education.transform(X[:, 1])
        X = X.astype(float)

        salary = regressor.predict(X)
        st.subheader(f'The estimated salary is ${salary[0]:.2f}')

